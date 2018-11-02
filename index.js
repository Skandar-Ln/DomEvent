export default {
    events: {
        visibilitychange: []
    },
    oneVisible(cb) {
        return this.onVisible(cb, true);
    },
    onVisible(cb, isOne) {
        return this.onVisibilitychange(cb, {isOne, visibility: 'visible'});
    },
    oneVisible(cb) {
        return this.onHidden(cb, true);
    },
    onHidden(cb, isOne) {
        return this.onVisibilitychange(cb, {isOne, visibility: 'hidden'});
    },
    onVisibilitychange(cb, {visibility, isOne}) {
        const eventCb = function (e) {
            if (visibility && document.visibilityState !== visibility) {
                return;
            }

            cb(e);
            isOne
            && document.removeEventListener('visibilitychange', eventCb);
        }
        const cancel = () => document.removeEventListener('visibilitychange', eventCb);

        document.addEventListener('visibilitychange', eventCb);

        return {cancel};
    }
}
