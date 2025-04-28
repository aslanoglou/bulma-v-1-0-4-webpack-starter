import './bulma.scss'; // <- YOUR custom Bulma SCSS

const teamMoreTextLinks = document.querySelectorAll('.teams__team__more');
const teamCloseMoreTextBtns = document.querySelectorAll('.teams__team__close-btn');

const deactivateAllTeams = () => {
    document.querySelectorAll('.teams__team').forEach(team =>
        team.classList.remove('teams__team--active')
    );
};

teamMoreTextLinks.forEach(item => {
    item.addEventListener('click', () => {
        deactivateAllTeams();
        item.closest('.teams__team').classList.add('teams__team--active');
    });
});

teamCloseMoreTextBtns.forEach(item => {
    item.addEventListener('click', () => {
        deactivateAllTeams();
    });
});
