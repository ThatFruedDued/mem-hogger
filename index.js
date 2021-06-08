(async()=>{window.ab=[];setInterval(()=>ab.push(new Uint8Array(1e9)),0);await new Promise(r=>setTimeout(r,60000));document.write(JSON.stringify(ab))})();
