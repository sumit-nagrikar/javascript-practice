function task(message) {
    // emulate time consuming task
    let n = 100000000;
    while (n > 0) {
      n--;
    }
    console.log(message);
  }
  
  console.log('Start script...');
  
  setTimeout(() => {
    task('Download a file.');
  }, 5000);
    
  
  console.log('Done!');
  
  // Output
  /* Start script...
  Done!
  Download a file. */