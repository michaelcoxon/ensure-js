import { Guid, ArgumentException } from "@michaelcoxon/utilities";
import { ArgumentAssertionBuilder } from "../ArgumentAssertionBuilder";


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
}
