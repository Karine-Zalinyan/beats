const findBlockByAlias = (alias) => {
    return $(".reviews__item").fillter((ndx, item) => {
        return $(item).attr("data-linked-with") == alias;

    })
};

$(".reviews__switcher-link").click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr("data-open");
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest(".reviews__switcher-item");


    itemShow.addClass("active").siblings().removeClass("active");
    curItem.addClass("active").siblings().removeClass("active");
});