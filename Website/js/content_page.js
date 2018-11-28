function toggle_answer(problem_id) {
    var ans = document.getElementById(problem_id);
    if (ans.style.display === "none") {
        ans.style.display = "block";
    } else {
        ans.style.display = "none";
    }
}
