/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let count=0;
    for(let i=0; i<preferences.length; i++)
  {
      let k = preferences[i]-1;
      let c = preferences[k]-1;
      if(preferences[i]!=preferences[k]&&preferences[k]!=preferences[c]) {
          if (preferences[c] - 1 == i) {
              count++;
              preferences[i] = 0;
              preferences[k] = 0;
              preferences[c] = 0;

          }
      }
}
return count;
};

