let changeColor = document.getElementById('changeColor');

chrome.storage.sync.get('color', function(data) {
  changeColor.style.backgroundColor = data.color;           // applying the color saved in the storage (black) to the element with id = "changeColor"
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function(element) {           // the onClick triggers a programatically injected content script
    let color = element.target.value;
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.executeScript(
          tabs[0].id,
          {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };