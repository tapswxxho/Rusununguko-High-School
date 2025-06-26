  function toggleNews() {
    const popup = document.getElementById('news-popup');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';}
    function toggleContact() {
    const popup = document.getElementById('contact-popup');
    popup.style.display = (popup.style.display === 'none' || popup.style.display === '') ? 'block' : 'none';}
    function toggleMenu() {
  const nav = document.querySelector('.navitems');
  nav.classList.toggle('show');
}