#!/bin/bash
# Zylch website local server manager

PORT=8000
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PID_FILE="$SCRIPT_DIR/.website.pid"

start() {
    cd "$SCRIPT_DIR"
    echo "Starting Zylch website at http://localhost:$PORT"
    echo "Press Ctrl+C to stop"
    python3 -m http.server $PORT
}

daemon() {
    cd "$SCRIPT_DIR"
    if [ -f "$PID_FILE" ]; then
        if kill -0 $(cat "$PID_FILE") 2>/dev/null; then
            echo "Website already running (PID: $(cat $PID_FILE))"
            exit 1
        fi
    fi
    nohup python3 -m http.server $PORT > /dev/null 2>&1 &
    echo $! > "$PID_FILE"
    echo "Zylch website started in background (PID: $!)"
    echo "URL: http://localhost:$PORT"
}

stop() {
    if [ -f "$PID_FILE" ]; then
        PID=$(cat "$PID_FILE")
        if kill -0 $PID 2>/dev/null; then
            kill $PID
            rm -f "$PID_FILE"
            echo "Website stopped (PID: $PID)"
        else
            rm -f "$PID_FILE"
            echo "PID file found but process not running"
        fi
    else
        # Fallback: find and kill any http.server on our port
        PIDS=$(lsof -ti:$PORT 2>/dev/null)
        if [ -n "$PIDS" ]; then
            echo "$PIDS" | xargs kill 2>/dev/null
            echo "Stopped processes on port $PORT"
        else
            echo "No website server running"
        fi
    fi
}

case "$1" in
    start)
        start
        ;;
    daemon)
        daemon
        ;;
    stop)
        stop
        ;;
    restart)
        stop
        sleep 1
        daemon
        ;;
    *)
        echo "Usage: website.sh {start|daemon|stop|restart}"
        echo ""
        echo "  start   - Run in foreground (Ctrl+C to stop)"
        echo "  daemon  - Run in background (nohup)"
        echo "  stop    - Stop background server"
        echo "  restart - Stop + daemon"
        exit 1
        ;;
esac
