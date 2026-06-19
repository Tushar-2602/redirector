function isValidUrl(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}


const redirect = (req,res)=>{
    const base = req.path;

    
    const redirectedPath = process.env[base];
 
    
    if (!isValidUrl(redirectedPath)) {
        res.redirect(`https://codepen.io/Tushar-Kumar-the-selector/full/vEgxBmp?redirect=${base}`)
    } 
    else{
        res.redirect(redirectedPath)
    }
}

export {redirect}