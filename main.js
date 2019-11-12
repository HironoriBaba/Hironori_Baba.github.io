function showInfo(projNumber) {
  if (document.querySelector(`#projectInfo #proj${projNumber}Info`).style.display === 'none') {
    hideInfo();
    document.querySelector('#projectInfo').style.display = 'block';
    document.querySelector(`#projectInfo #proj${projNumber}Info`).style.display = 'block';
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#projectInfo").offset().top
    }, 500);
  } else {
    document.querySelector('#projectInfo').style.display = 'none';
    document.querySelector(`#projectInfo #proj${projNumber}Info`).style.display = 'none';
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#projects").offset().top
    }, 500);
  }
}

function hideInfo() {
  document.querySelectorAll('.projInfo').forEach((info) => {
    info.style.display = 'none';
  });
}