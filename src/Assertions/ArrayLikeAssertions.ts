﻿import { ArgumentAssertionBuilder } from '../ArgumentAssertionBuilder';
import { ArgumentNullException, ArgumentException, ArgumentUndefinedException, NotSupportedException } from '@michaelcoxon/utilities';


export class ArrayLikeArgumentAssertionBuilder<T> extends ArgumentAssertionBuilder<ArrayLike<T>>
{
    /** Ensures the array is not null, undefined or empty */
    isNotNullOrUndefinedOrEmpty(): this
    {
        if (this.argument === null)
        {
            throw new ArgumentNullException(this.argumentName);
        }
        if (this.argument === undefined)
        {
            throw new ArgumentUndefinedException(this.argumentName);
        }
        if (this.argument.length == 0)
        {
            throw new ArgumentException(this.argumentName);
        }
        return this;
    }

    isOneOf(...options: ArrayLike<T>[]): this
    {
        throw new NotSupportedException();
    }
}
