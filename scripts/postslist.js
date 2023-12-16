function showDeleteModal(id) {
    $('#modalConfirmYesNo').modal('show');
    document.getElementById('modalConfirmYesNo').setAttribute('idToDelete', id);
}

function deletePost(e) {
    event.preventDefault(); //prevents page from refreshing
    document.getElementById('modalConfirmYesNo').style.display = 'none';
    var idToDelete = document.getElementById('modalConfirmYesNo').getAttribute('idToDelete');
    document.getElementById(idToDelete).remove();
}

function openPost(author, heading, content) {
    const url = `../html/post.html?heading=${encodeURIComponent(heading.innerText)}&author=${encodeURIComponent(
            author.innerText
    )}&content=${encodeURIComponent(content.innerText)}`;
    window.location.href = url;
}
