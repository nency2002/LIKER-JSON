let count = localStorage.getItem('count')||0;
document.getElementById('count').innerHTML=count;
document.getElementById('btn').addEventListener('click',()=>{
    count++;
    console.log(count);
    document.getElementById('count').innerHTML=count;
    localStorage.setItem('count',count);
})

let counts = sessionStorage.getItem('counts')|| localStorage.getItem('count');
document.getElementById('counts').innerHTML=counts;
document.getElementById('btn1').addEventListener('click',()=>{
    counts--;
    console.log(counts);
    document.getElementById('counts').innerHTML=counts;
    sessionStorage.setItem('counts',counts);
})

let follows = localStorage.getItem('follows')||0;
document.getElementById('follows').innerHTML=follows;
document.getElementById('btns').addEventListener('click',()=>{
    follows++;
    console.log(follows);
    document.getElementById('follows').innerHTML=follows;
    localStorage.setItem('follows',follows);
})

