function scrollTo(elDOM){
    const options = {top: 0, left: 0, behavior: 'smooth'}
    if(elDOM){
        const dimm =  elDOM.current.getBoundingClientRect();
        options.top = dimm.top
    }

    window.scroll(options);
}


export {
    scrollTo
}