// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

//JavaScript code

if (window.location.pathname === '/Score') {

    const elements = document.getElementsByClassName("video-background-holder");

    console.log(elements)

    const images = ['https://i.ibb.co/Mqzwfxj/1.png', 'https://i.ibb.co/2YjwR44f/2.png', 'https://i.ibb.co/v4HzcY2y/3.png', 'https://i.ibb.co/SXq6J588/4.png', 'https://i.ibb.co/ZRw4VT6Q/5.png', 'https://i.ibb.co/rRSbRWDT/6.png', 'https://i.ibb.co/TMDJNPkX/7.png', 'https://i.ibb.co/3m5DLrtt/8.png', 'https://i.ibb.co/5hhvmv8g/9.png', 'https://i.ibb.co/WN481QL2/10.png', 'https://i.ibb.co/4nZYrbZy/11.png', 'https://i.ibb.co/MypD4qM4/12.png', 'https://i.ibb.co/Tx7CS4gr/13.png', 'https://i.ibb.co/F4g381XL/14.png', 'https://i.ibb.co/zTc5rg1k/15.png', 'https://i.ibb.co/Xf8RjqWN/16.png', 'https://i.ibb.co/39wY7tkj/17.png', 'https://i.ibb.co/hRQhB9wr/18.png', 'https://i.ibb.co/JRcptzLV/19.png', 'https://i.ibb.co/FLVyw5RK/20.png', 'https://i.ibb.co/bgZGrRZB/21.png', 'https://i.ibb.co/0VnXWtth/22.png', 'https://i.ibb.co/67KZwyXc/23.png', 'https://i.ibb.co/wNpkdTfN/24.png', 'https://i.ibb.co/Q5SBtSq/25.png', 'https://i.ibb.co/TxDwv35r/26.png', 'https://i.ibb.co/yFcVDYy5/36.png', 'https://i.ibb.co/fY3GjpwQ/27.png', 'https://i.ibb.co/GQqLzZ5P/28.png', 'https://i.ibb.co/5xnV71ZX/29.png', 'https://i.ibb.co/j10bKg0/30.png', 'https://i.ibb.co/jPyszDSJ/31.png', 'https://i.ibb.co/V0c2bm6V/32.png', 'https://i.ibb.co/5h3ZMZxT/33.png','https://i.ibb.co/JRQJDNt4/34.png', 'https://i.ibb.co/jkvdpgH5/35.png', 'https://i.ibb.co/RTZGxqGp/37.png', 'https://i.ibb.co/NgY4b36h/38.png', 'https://i.ibb.co/Xrtnz7Ck/39.png' ];

    setTimeout(() => {
        document.getElementById('img').style.display = 'none';
    }, 86400000);

    const rand = Math.floor(Math.random() * images.length);
    const src = images[rand];

    console.log(rand, src);



    const img = document.createElement('IMG');
    img.src = src;
    img.style.width = "20vw";
    document.body.appendChild(img);
    img.style.display = "block";
    img.style.marginLeft = "auto"; 
    img.style.marginRight = "auto"; 
    
}