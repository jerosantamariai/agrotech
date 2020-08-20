import React from 'react';

const Home = () => {
    var arr = [2,3,4,3,2,1];

var repeat = {};

arr.forEach(function(num){
  repeat[num] = (repeat[num] || 0) + 1;
});

console.log(repeat);
    return(
        <h1>Home</h1>
    );
}

export default Home;