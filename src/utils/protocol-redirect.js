export const defaultExcept = ['127.0.0.1', '0.0.0.0', 'localhost'];

export const redirect = (protocol = 'https', except = defaultExcept) => {
    const proto = protocol+':';

    if(document.location.protocol !== proto &&
            except.indexOf(document.location.hostname) < 0) {
        document.location.protocol = proto;
    }
};

export default redirect;
