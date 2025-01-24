(function () {
    const originalFetch = window.fetch;

    // Override fetch API
    window.fetch = async function (...args) {
        const url = args[0];

        // Block "seen" requests for messages
        if (url.includes('/seen/')) {
            console.log('Blocked "seen" notification:', url);
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        }

        // Block "story seen" requests
        if (url.includes('/stories/reel/seen/')) {
            console.log('Blocked story view:', url);
            return new Response(JSON.stringify({ success: true }), { status: 200 });
        }

        return originalFetch(...args);
    };

    // Override XMLHttpRequest
    const originalXHR = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (method, url, ...rest) {
        // Block "seen" requests for messages
        if (url.includes('/seen/')) {
            console.log('Blocked "seen" notification (XHR):', url);
            return;
        }

        // Block "story seen" requests
        if (url.includes('/stories/reel/seen/')) {
            console.log('Blocked story view (XHR):', url);
            return;
        }

        return originalXHR.call(this, method, url, ...rest);
    };

    console.log('Instagram "seen" and "story seen" notifications are now blocked.');
})();
