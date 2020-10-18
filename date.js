
module.exports = getDate;

/**
 * [getDate get current day with date]
 * @return {[date]} [formated date using en-US format example: Monday, 7 March]
 */

function getDate()
{
    let today = new Date();

    let options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };

    let day = today.toLocaleDateString("en-US", options);

    return (day);
}
