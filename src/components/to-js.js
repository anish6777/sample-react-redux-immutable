import React from 'react'
import { Iterable } from 'immutable'


const convertJS = (arr) => {
    const KEY = 0
    const VALUE = 1
    return arr.reduce(
        (newProps, wrappedComponentProp) => {
            newProps[wrappedComponentProp[KEY]] = Iterable.isIterable(
                wrappedComponentProp[VALUE]
            )
                ? wrappedComponentProp[VALUE].toJS()
                : (typeof(wrappedComponentProp[VALUE]) === "object") ? convertJS(Object.entries(wrappedComponentProp[VALUE])) : wrappedComponentProp[VALUE] 
            return newProps
        },
        {}
    )

}

export const toJS = WrappedComponent => wrappedComponentProps => {
    const propsJS = convertJS(Object.entries(wrappedComponentProps))
    return <WrappedComponent {...propsJS} />
}