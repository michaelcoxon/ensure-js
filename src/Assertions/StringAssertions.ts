import { ArgumentAssertionBuilder, IArgumentAssertionBuilder, AssertionType } from "../ArgumentAssertionBuilder";
import { ArgumentNullException, ArgumentException, Strings, ArgumentUndefinedException, Exception } from "@michaelcoxon/utilities";


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
        if (this.argument === Strings.empty)
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
