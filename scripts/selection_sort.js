function Selection_sort() {
    c_delay = 0;
    selection_info();
    for (var i = 0; i < array_size - 1; i++) {
        div_update(divs[i], div_sizes[i], "red");//Color update

        index_min = i;

        for (var j = i + 1; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "yellow");//Color update

            if (div_sizes[j] < div_sizes[index_min]) {
                if (index_min != i) {
                    div_update(divs[index_min], div_sizes[index_min], "blue");//Color update
                }
                index_min = j;
                div_update(divs[index_min], div_sizes[index_min], "red");//Color update
            }
            else {
                div_update(divs[j], div_sizes[j], "blue");//Color update
            }
        }

        if (index_min != i) {
            var temp = div_sizes[index_min];
            div_sizes[index_min] = div_sizes[i];
            div_sizes[i] = temp;

            div_update(divs[index_min], div_sizes[index_min], "red");//Height update
            div_update(divs[i], div_sizes[i], "red");//Height update
            div_update(divs[index_min], div_sizes[index_min], "blue");//Color update
        }
        div_update(divs[i], div_sizes[i], "green");//Color update
    }
    div_update(divs[i], div_sizes[i], "green");//Color update

    enable_buttons();
}

function selection_info() {
    var ele = document.getElementById("Info_Cont1");
    ele.innerHTML = "<p>Sort: Selection</p><p>Average Complexity: O(n^2) </p><p>Worst Complexity: O(n^2) </p><p>Best Complexity: O(n^2) </p><p>Space Complexity: O(1) </p>";

}