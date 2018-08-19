import C from "../data/constants";

export function sortList(order, status) {
    switch (order) {
        case C.NEWEST_ISSUES:
            return {
                type: C.NEWEST_ISSUES,
                payload: status,
            }
        case C.OLDEST_ISSUES:
            return {
                type: C.OLDEST_ISSUES,
                payload: status,
            }
        case C.MOST_COMMENTED:
            return {
                type: C.MOST_COMMENTED,
                payload: status,
            }
        case C.LEAST_COMMENTED:
            return {
                type: C.LEAST_COMMENTED,
                payload: status,
            }
    }
}
