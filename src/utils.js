export function generateLinks() {
    if (typeof document !== 'undefined') {
        let headers = Array.from(document.querySelectorAll("h2, h3, h4, h5, h6"));
        let links = [];


        headers.forEach((header, indice) => {
            header.id =
                header.textContent
                    .toLowerCase()
                    .replace(/ /g, "-")
                    .replace(/[^\w-]+/g, "") +
                "-" +
                indice;
            for (let i = 1; i <= 6; i++) {
                if (header.tagName === `H${i}`) {
                    links += `<li class="listh${i}" style="width: 100%; text-align: left;">
                      <a class="ish${i}" href="#${header.id}">${header.textContent}</a>
                    </li>`;
                }
            }
        });
        return links;
    }

}