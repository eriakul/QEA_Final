var create_labels = function(element_num){
    var labels = [];
    for (i = element_num - 2; i > 0; i--) {
        labels.push("t - " + i);
    }
    labels.push("t");
    labels.push("t + 1");
    return labels;
  };

console.log(create_labels(6));
