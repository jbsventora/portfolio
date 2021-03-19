const   nameButton = $('#index-name'),
        aboutButton = $('#index-about'),
        resumeButton = $('#index-resume'),
        contactButton = $('#index-contact'),
        blogButton = $('#index-blog'),
        homeAboutLink = $('#home-about-link'),
        body = $('#content');

var dir = '';
var state = 'home';
var states = [
    'home', 
    'about', 
    'resume', 
    'contact', 
    'blog'
]

loadPage = (nState) => {
    if (state != nState) {
        state = nState;
        body.load(dir + '/' + nState + '.html');
        body.hide();
        body.fadeIn('500');
    }
}

for (i = 0; i < states.length; i++) {
    if (window.location.href.indexOf(states[i]) > -1) {
        console.log(states[i]);
    }
}

if (window.location.href.indexOf('127') > -1) {
    dir = ''
} else {
    dir = '/jsventora/web287/portfolio'
}

body.load(dir + '/home.html');

nameButton.click(() => {
    loadPage('home');
});
aboutButton.click(() => {
    loadPage('about');
});
resumeButton.click(() => {
})
contactButton.click(() => {
})
blogButton.click(() => {
})
homeAboutLink.click(() => {
    loadPage('about');
})


