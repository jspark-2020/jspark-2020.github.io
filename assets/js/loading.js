function onReady(callback) {
    var intervalId = window.setInterval(function () {
      if (document.getElementsByTagName("body")[0] !== undefined) {
        window.clearInterval(intervalId);
        callback.call(this);
      }
    }, 2000);
  }

  function setVisible(selector, visible) {
    document.querySelector(selector).style.visibility = visible
      ? "visible"
      : "hidden";
  }

  onReady(function () {
    setVisible("#main", true);
    setVisible("#loading", false);
  });