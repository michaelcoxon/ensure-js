import ArgumentException from '@michaelcoxon/utilities/lib/Exceptions/ArgumentException';
import ArgumentNullException from '@michaelcoxon/utilities/lib/Exceptions/ArgumentNullException';
import ArgumentUndefinedException from '@michaelcoxon/utilities/lib/Exceptions/ArgumentUndefinedException';
import NotSupportedException from '@michaelcoxon/utilities/lib/Exceptions/NotSupportedException';
import { ArgumentAssertionBuilder } from '../ArgumentAssertionBuilder';


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
