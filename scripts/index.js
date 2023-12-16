function displayAllPosts() {
    window.location.href = "./html/postslist.html";
}
function createPost() {
    document.getElementById('newPostModal').style.display = 'flex';
}

function closeNewPostModal() {
    document.getElementById('newPostModal').style.display = 'none';
}