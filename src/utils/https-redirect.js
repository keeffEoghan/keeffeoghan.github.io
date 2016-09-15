const onlyHTTP = ['127.0.0.1', '0.0.0.0', 'localhost'];

if(document.location.protocol !== 'https:' &&
        onlyHTTP.indexOf(document.location.hostname) < 0) {
    document.location.protocol = 'https:';
}
