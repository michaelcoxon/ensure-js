﻿import ArgumentException from '@michaelcoxon/utilities/lib/Exceptions/ArgumentException';
import Guid from '@michaelcoxon/utilities/lib/Guid';
import { ArgumentAssertionBuilder } from '../ArgumentAssertionBuilder';


export class GuidArgumentAssertionBuilder extends ArgumentAssertionBuilder<Guid>
{
    /// <summary>
    /// Ensures the <see cref="Guid" /> argument is not equal to <see cref="Guid.Empty" />.
    /// </summary>
    /// <param name="this">The this.</param>
    /// <exception cref="System.ArgumentException"></exception>
    isValidGuid(): this
    {
        if (this.argument == Guid.empty)
        {
            throw new ArgumentException(this.argumentName);
        }
        return this;
    }

    /**
     * Determines whether the argument is one of the specified options.
     * @param options
     */
    isOneOf(...options: Guid[]): this
    {
        let matched = false;

        for (let option of options)
        {
            matched = option.toString() === this.argument.toString();

            if (matched)
            {
                break;
            }
        }

        if (!matched)
        {
            throw new ArgumentException(this.argumentName, `Argument '${this.argumentName}' must be one of ('${options.join("', '")}')`);
        }

        return this;
    }
}
