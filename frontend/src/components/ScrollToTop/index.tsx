import { ScrollToTopContainer } from "./style";
import { ArrowUp } from "phosphor-react";

export function ScrollToTop(): JSX.Element {

    function handleScrollToTop() {

        window.scrollTo(0, 0)
    }

    return (
        <ScrollToTopContainer>
            <button type="button" onClick={handleScrollToTop}>
                <ArrowUp weight="bold" />
            </button>
        </ScrollToTopContainer>
    )
}