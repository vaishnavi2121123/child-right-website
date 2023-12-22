// SIDEBAR TOGGLE

var sidebarOpen = false;
var sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

//leaderboard

function search() {
    var text = document.getElementById('search').value;
    const tr = document.getElementsByTagName('tr');
    for (let i = 1; i < tr.length; i++) {
        if (!tr[i].children[1].children[1].innerHTML.toLowerCase().includes(
            text.toLowerCase()
        )) {
            tr[i].style.display = 'none';
        }
        else {
            tr[i].style.display = '';
        }
    }
}

