const qs = (element) => document.querySelector(element);


qs('.banner1').addEventListener("mouseover", () => {
    qs('.banner_desc').style.display = 'flex';
    qs('.banner_warning').style.display = 'none';
    qs('.follow').style.display = 'flex';
})
qs('.banner1').addEventListener("mouseout", () => {
    qs('.banner_desc').style.display = 'none';
    qs('.banner_warning').style.display = 'flex';
    qs('.follow').style.display = 'none';
})
qs('.banner2').addEventListener("mouseover", () => {
    qs('.banner_desc2').style.display = 'flex';
    qs('.banner_warning2').style.display = 'none';
    qs('.follow2').style.display = 'flex';
})
qs('.banner2').addEventListener("mouseout", () => {
    qs('.banner_desc2').style.display = 'none';
    qs('.banner_warning2').style.display = 'flex';
    qs('.follow2').style.display = 'none';
})
qs('.banner3').addEventListener("mouseover", () => {
    qs('.banner_desc3').style.display = 'flex';
    qs('.banner_warning3').style.display = 'none';
    qs('.follow3').style.display = 'flex';
})
qs('.banner3').addEventListener("mouseout", () => {
    qs('.banner_desc3').style.display = 'none';
    qs('.banner_warning3').style.display = 'flex';
    qs('.follow3').style.display = 'none';
})



qs('.news1').addEventListener("mouseover", () => {
    qs('.more1').style.display = 'block';

})
qs('.news1').addEventListener("mouseout", () => {
    qs('.more1').style.display = 'none';

})
qs('.news2').addEventListener("mouseover", () => {
    qs('.more2').style.display = 'block';

})
qs('.news2').addEventListener("mouseout", () => {
    qs('.more2').style.display = 'none';

})
qs('.news3').addEventListener("mouseover", () => {
    qs('.more3').style.display = 'block';

})
qs('.news3').addEventListener("mouseout", () => {
    qs('.more3').style.display = 'none';

})
qs('.news4').addEventListener("mouseover", () => {
    qs('.more4').style.display = 'block';

})
qs('.news4').addEventListener("mouseout", () => {
    qs('.more4').style.display = 'none';

})

qs('.widget_images_1 ').addEventListener("mouseover", () => {
    qs('.m1').style.display = 'block';

})
qs('.widget_images_1 ').addEventListener("mouseout", () => {
    qs('.m1').style.display = 'none';
})
qs('.widget_images_2').addEventListener("mouseover", () => {
    qs('.m2').style.display = 'block';

})
qs('.widget_images_2 ').addEventListener("mouseout", () => {
    qs('.m2').style.display = 'none';
})
qs('.widget_images_3 ').addEventListener("mouseover", () => {
    qs('.m3').style.display = 'block';

})
qs('.widget_images_3 ').addEventListener("mouseout", () => {
    qs('.m3').style.display = 'none';
})
qs('.widget_images_4 ').addEventListener("mouseover", () => {
    qs('.m4').style.display = 'block';

})
qs('.widget_images_4 ').addEventListener("mouseout", () => {
    qs('.m4').style.display = 'none';
})
qs('.widget_images_5 ').addEventListener("mouseover", () => {
    qs('.m5').style.display = 'block';

})
qs('.widget_images_5 ').addEventListener("mouseout", () => {
    qs('.m5').style.display = 'none';
})
qs('.widget_images_6 ').addEventListener("mouseover", () => {
    qs('.m6').style.display = 'block';

})
qs('.widget_images_6 ').addEventListener("mouseout", () => {
    qs('.m6').style.display = 'none';
})