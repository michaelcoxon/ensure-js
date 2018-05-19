
import { ArgumentNullException, ArgumentUndefinedException, Guid, NotSupportedException } from '@michaelcoxon/utilities';
import { StringArgumentAssertionBuilder } from './Assertions/StringAssertions';
import { IArgumentAssertionBuilder, ArgumentAssertionBuilder } from './ArgumentAssertionBuilder';
import { GuidArgumentAssertionBuilder } from './Assertions/GuidAssertions';
import { ArrayLikeArgumentAssertionBuilder } from 'dts/Assertions/ArrayLikeAssertions';

export namespace Ensure
{
    /**
     * Provides the helpers for validation
     * @param argument The argument.
     * @param argumentName Name of the argument.
     */
    export function arg(argument: string, argumentName: string): StringArgumentAssertionBuilder;
    export function arg(argument: Guid, argumentName: string): GuidArgumentAssertionBuilder;
    export function arg<TElement>(argument: ArrayLike<TElement>, argumentName: string): ArrayLikeArgumentAssertionBuilder<TElement>;
    export function arg<T>(argument: T, argumentName: string): ArgumentAssertionBuilder<T>;
    export function arg(argument: any, argumentName: string): IArgumentAssertionBuilder<any>
    {
        if (typeof (argument) === "string")
        {
            return new StringArgumentAssertionBuilder(argument, argumentName);
        }
        else if (argument instanceof Guid)
        {
            return new GuidArgumentAssertionBuilder(argument, argumentName);
        }
        else if (Array.isArray(argument))
        {
            return new ArrayLikeArgumentAssertionBuilder(argument, argumentName);
        }
        else if (typeof (argument) === "object")
        {
            return new ArgumentAssertionBuilder(argument, argumentName);
        }
        else
        {
            throw new NotSupportedException("the argument type is not supported");
        }
    }
}