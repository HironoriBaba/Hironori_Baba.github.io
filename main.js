function showInfo(projNumber) {
  if (document.querySelector(`#projectInfo #proj${projNumber}Info`).style.display === 'none') {
    hideInfo();
    document.querySelector('#projectInfo').style.display = 'block';
    document.querySelector(`#projectInfo #proj${projNumber}Info`).style.display = 'block';
  } else {
    document.querySelector('#projectInfo').style.display = 'none';
    document.querySelector(`#projectInfo #proj${projNumber}Info`).style.display = 'none';
  }
}

function hideInfo() {
  document.querySelectorAll('.projInfo').forEach((info) => {
    info.style.display = 'none';
  });
}