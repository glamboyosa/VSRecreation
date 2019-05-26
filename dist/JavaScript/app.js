/*--Scroll to top*/
document.querySelector('.my-btn').addEventListener('click', function() {
  setTimeout(scrollTop, 1000);
});
function scrollTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

document.querySelector('.click-me').addEventListener('click', click1);
document.querySelector('.click').addEventListener('click', click2);
document.querySelector('.clickme').addEventListener('click', click3);
function click1(e) {
  var element, html;
  e.preventDefault();
  console.log('hallellujah');
  element = document.querySelector('.box');
  element.innerHTML = '';
  html =
    '<h2>New Project Dialog</h2><p>The <a href="#">New Project Dialog</a> retains applied filters between invocations. Retain filters for language,platform, and project type between invocations of the new project dialog so that you can access the types of templates you generally use with fewer clicks</p><img src="Resources/CSS/Images/newproject.png" alt="new project" class="img-class"> <a href="#" class="btn-white">Release Notes ></a>';
  element.insertAdjacentHTML('beforeend', html);
}
function click2(e) {
  var element, html;
  e.preventDefault();
  // console.log('hallellujah');
  element = document.querySelector('.box');
  element.innerHTML = '';
  html =
    '<h2>Azure SignalR Service</h2><p>Visual Studio 2019 Version 16.2 now comes with support for the Azure SignalR Service in publish profiles, meaning you can create new instances of the Azure SignalR Service without leaving the IDE. You can also select existing instances to satisfy the dependency requirements of your application environment.</p><img src="Resources/CSS/Images/azure-signalR.jpg" alt="Azure signalR" class="img-class"> <a href="#" class="btn-white">Release Notes ></a>';
  element.insertAdjacentHTML('beforeend', html);
}
function click3(e) {
  var element, html;
  e.preventDefault();
  // console.log('hallellujah');
  element = document.querySelector('.box');
  element.innerHTML = '';
  html =
    '<h2>Test Explorer Improvements</h2><p>The Test Explorer now has significant performance and UI improvements. Visual Studio processes consume less memory and discovering large numbers of tests is faster. The updated UI includes easier filtering, more discoverable commands, and the addition of customizable columns and multi-tiered group by that let the user fine tune what test information is displayed.</p><img src="Resources/CSS/Images/test-explorer.jpg" alt="test explorer" class="img-class"> <a href="#" class="btn-white">Release Notes ></a>';
  element.insertAdjacentHTML('beforeend', html);
}
