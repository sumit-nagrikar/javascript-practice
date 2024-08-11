function compressVideo(frames) {//[2, 1, 2, 2]
    let i = 0;
    while (i < frames.length) {


      if ((i > 0 && frames[i] === frames[i-1]) || (i < frames.length-1 && frames[i] === frames[i+1])) {

        
        frames.splice(i, 1);
        i = Math.max(0, i - 1); // Move back one step, but not before the start
      } else {
        i++;
      }
    }
    return frames.length;
  }
  
  // Example usage
  let frames = [2, 1, 2, 2];
  console.log(compressVideo(frames)); // Output: 3

/*
  Explanation:
  Initialization: Start with the index i set to 0.
  Traversal and Check:
  Iterate through the frames.
  If the current frame can be removed (i.e., it matches the previous frame or the next frame), remove it using splice.
  Adjust the index i to Math.max(0, i - 1) to check the previous frame again after removal. This ensures we don't miss any potential removal.
  If the current frame cannot be removed, increment the index i.
  Termination: The loop continues until i reaches the end of the array.
  Example Walkthrough:
  For the input [2, 1, 2, 2]:
  
  Start at index 0: [2, 1, 2, 2]
  i = 0: frames[0] = 2, no neighbors to compare.
  Move to index 1: [2, 1, 2, 2]
  i = 1: frames[1] = 1, neighbors are 2 and 2, not removable.
  Move to index 2: [2, 1, 2, 2]
  i = 2: frames[2] = 2, neighbors are 1 and 2, removable.
  Remove frame 2: [2, 1, 2], set i = 1.
  Move to index 1: [2, 1, 2]
  i = 1: frames[1] = 1, neighbors are 2 and 2, not removable.
  Move to index 2: [2, 1, 2]
  i = 2: frames[2] = 2, no next neighbor.
  Finish: Final array is [2, 1, 2], length is 3.
  This optimized approach ensures that the function does not repeatedly traverse the array unnecessarily, improving efficiency while maintaining correctness.   */