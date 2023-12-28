document.getElementById("start").addEventListener('click', function() {
    document.getElementById("start").style.display = 'none'
    document.getElementById('road').style.animation = 'roadanimation 20s linear infinite'

    let n = 0;
    setInterval(() => {
        document.getElementById('score').innerText = `Score : ${n}`
        n = n + 1
        var ecar1_left = Math.abs(document.getElementById('ecarimg1').getBoundingClientRect().left);
        var ecar1_right = Math.abs(document.getElementById('ecarimg1').getBoundingClientRect().right);
        var ecar1_top = Math.abs(document.getElementById('ecarimg1').getBoundingClientRect().top);
        var ecar1_bottom = Math.abs(document.getElementById('ecarimg1').getBoundingClientRect().bottom);

        var ecar2_left = Math.abs(document.getElementById('ecarimg2').getBoundingClientRect().left);
        var ecar2_right = Math.abs(document.getElementById('ecarimg2').getBoundingClientRect().right);
        var ecar2_top = Math.abs(document.getElementById('ecarimg2').getBoundingClientRect().top);
        var ecar2_bottom = Math.abs(document.getElementById('ecarimg2').getBoundingClientRect().bottom);

        var ecar3_left = Math.abs(document.getElementById('ecarimg3').getBoundingClientRect().left);
        var ecar3_right = Math.abs(document.getElementById('ecarimg3').getBoundingClientRect().right);
        var ecar3_top = Math.abs(document.getElementById('ecarimg3').getBoundingClientRect().top);
        var ecar3_bottom = Math.abs(document.getElementById('ecarimg3').getBoundingClientRect().bottom);

        var ecar4_left = Math.abs(document.getElementById('ecarimg4').getBoundingClientRect().left);
        var ecar4_right = Math.abs(document.getElementById('ecarimg4').getBoundingClientRect().right);
        var ecar4_top = Math.abs(document.getElementById('ecarimg4').getBoundingClientRect().top);
        var ecar4_bottom = Math.abs(document.getElementById('ecarimg4').getBoundingClientRect().bottom);


        var mycar_left = Math.abs(document.getElementById('mycarimg').getBoundingClientRect().left);
        var mycar_right = Math.abs(document.getElementById('mycarimg').getBoundingClientRect().right);
        var mycar_top = Math.abs(document.getElementById('mycarimg').getBoundingClientRect().top);
        var mycar_bottom = Math.abs(document.getElementById('mycarimg').getBoundingClientRect().bottom);

        if (((ecar1_left < mycar_left && mycar_left < ecar1_right) || (ecar1_left < mycar_right && mycar_right < ecar1_right)) && ((ecar1_top < mycar_top && mycar_top < ecar1_bottom) || (ecar1_top < mycar_bottom && mycar_bottom < ecar1_bottom))) {
            setTimeout(() => { alert(`Game over!`) })
            location.reload();
        }
        if (((ecar2_left < mycar_left && mycar_left < ecar2_right) || (ecar2_left < mycar_right && mycar_right < ecar2_right)) && ((ecar2_top < mycar_top && mycar_top < ecar2_bottom) || (ecar2_top < mycar_bottom && mycar_bottom < ecar2_bottom))) {
            setTimeout(() => { alert(`Game over!`) })
            location.reload();
        }
        if (((ecar3_left < mycar_left && mycar_left < ecar3_right) || (ecar3_left < mycar_right && mycar_right < ecar3_right)) && ((ecar3_top < mycar_top && mycar_top < ecar3_bottom) || (ecar3_top < mycar_bottom && mycar_bottom < ecar3_bottom))) {
            setTimeout(() => { alert(`Game over!`) })
            location.reload();
        }
        if (((ecar4_left < mycar_left && mycar_left < ecar4_right) || (ecar4_left < mycar_right && mycar_right < ecar4_right)) && ((ecar4_top < mycar_top && mycar_top < ecar4_bottom) || (ecar4_top < mycar_bottom && mycar_bottom < ecar4_bottom))) {
            setTimeout(() => { alert(`Game over!`) })
            location.reload();
        }

        if (mycar_left < 460 || mycar_right > 1000 || mycar_top < 0 || mycar_bottom > 670) {
            setTimeout(() => { alert(`Game over!`) })
            location.reload();
        }



    }, 100);
    setInterval(() => {
        num = Math.floor(Math.random() * (310 - 230 + 1) + 230);
        document.getElementById('enemycar1').style.left = `${num}px`;
    }, 6000);
    setInterval(() => {
        num = Math.floor(Math.random() * (200 - 100 + 1) + 100);
        document.getElementById('enemycar2').style.left = `${num}px`;
    }, 8000);
    setInterval(() => {
        num = Math.floor(Math.random() * (70 + 40 + 1) - 40);
        document.getElementById('enemycar3').style.left = `${num}px`;
    }, 4000);
    setInterval(() => {
        num = Math.floor(Math.random() * (-50 + 150 + 1) - 150);
        document.getElementById('enemycar4').style.left = `${num}px`;
    }, 7000);




    document.getElementById('enemycar1').style.animation = 'ecar1 6s linear infinite'
    document.getElementById('enemycar2').style.animation = 'ecar2 8s linear infinite'
    document.getElementById('enemycar3').style.animation = 'ecar3 4s linear infinite'
    document.getElementById('enemycar4').style.animation = 'ecar4 7s linear infinite'


    let t = 15
    let l = 0
    window.addEventListener("keydown", function(event) {
        if (event.key === "w" || event.key === "W") {
            t = t - 3;
        }
        if (event.key === "a" || event.key === "A") {
            l = l - 1;
        }
        if (event.key === "s" || event.key === "S") {
            t = t + 3;
        }
        if (event.key === "d" || event.key === "D") {
            l = l + 1;
        }
        document.getElementById("mycar").style.top = `${t}vh`;
        document.getElementById("mycar").style.left = `${l}vw`;
    })
})