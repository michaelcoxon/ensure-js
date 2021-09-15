import ArgumentException from '@michaelcoxon/utilities/lib/Exceptions/ArgumentException';
import ArgumentNullException from '@michaelcoxon/utilities/lib/Exceptions/ArgumentNullException';
import ArgumentUndefinedException from '@michaelcoxon/utilities/lib/Exceptions/ArgumentUndefinedException';
import { empty } from '@michaelcoxon/utilities/lib/Strings/_consts';
import { ArgumentAssertionBuilder, IArgumentAssertionBuilder, AssertionType } from '../ArgumentAssertionBuilder';


export class StringArgumentAssertionBuilder
    extends ArgumentAssertionBuilder<string>
    implements IArgumentAssertionBuilder<string>
{
    /** Ensures the string is not null, undefined or empty */
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
        if (this.argument === empty)
        {
            throw new ArgumentException(this.argumentName);
        }
        return this;
    }

    /**
     * Ensures the argument matches the specified regex.
     * @param regex The regex.
     */
    matchesRegex(regex: RegExp): this
    {
        if (!regex.test(this.argument))
        {
            throw new ArgumentException(this.argumentName, `The string '${this.argument}' does not match the regular expression '${regex}'`);
        }

        return this;
    }
}
