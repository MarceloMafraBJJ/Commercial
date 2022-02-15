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