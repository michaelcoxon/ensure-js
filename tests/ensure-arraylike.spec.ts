﻿import 'mocha';
import { expect, assert } from 'chai';
import { Ensure } from '../src/index';

describe("Ensure a ArrayLike isNotNull", () =>
{
    function testMethod<T>(arrayLike: ArrayLike<T> | null)
    {
        Ensure.arg(arrayLike, "arrayLike").isNotNull();
    }

    it("'[]' should not throw an exception", () =>
    {
        try
        {
            testMethod([]);
        }
        catch
        {
            assert.fail();
        }
    });

    it("'null' should throw an exception", (done) =>
    {
        try
        {
            testMethod(null);
            assert.fail();
        }
        catch
        {
            done();
        }
    });
});

describe("Ensure a ArrayLike isNotUndefined", () =>
{
    function testMethod<T>(arrayLike?: ArrayLike<T>)
    {
        Ensure.arg(arrayLike, "arrayLike").isNotUndefined();
    }

    it("'[]' should not throw an exception", () =>
    {
        try
        {
            testMethod([]);
        }
        catch
        {
            assert.fail();
        }
    });

    it("'undefined' should throw an exception", (done) =>
    {
        try
        {
            testMethod();
            assert.fail();
        }
        catch
        {
            done();
        }
    });
});

describe("Ensure a ArrayLike isNotNullOrUndefined", () =>
{
    function testMethod<T>(arrayLike?: ArrayLike<T> | null)
    {
        Ensure.arg(arrayLike, "arrayLike").isNotNullOrUndefined();
    }

    it("'[]' should not throw an exception", () =>
    {
        try
        {
            testMethod([]);
        }
        catch
        {
            assert.fail();
        }
    });

    it("'null' should throw an exception", (done) =>
    {
        try
        {
            testMethod(null);
            assert.fail();
        }
        catch
        {
            done();
        }
    });

    it("'undefined' should throw an exception", (done) =>
    {
        try
        {
            testMethod();
            assert.fail();
        }
        catch
        {
            done();
        }
    });
});

describe("Ensure a ArrayLike matches", () =>
{
    function testMethod<T>(arrayLike: ArrayLike<T> | null)
    {
        Ensure.arg(arrayLike, "arrayLike").matches(s => s.length == 4);
    }

    it("'[1,2,3,4]' should not throw an exception", () =>
    {
        try
        {
            testMethod([1,2,3,4]);
        }
        catch
        {
            assert.fail();
        }
    });

    it("'[]' should throw an exception", (done) =>
    {
        try
        {
            testMethod([]);
            assert.fail();
        }
        catch
        {
            done();
        }
    });

    it("'null' should throw an exception", (done) =>
    {
        try
        {
            testMethod(null);
            assert.fail();
        }
        catch
        {
            done();
        }
    });
});

describe("Ensure a ArrayLike isNotNullOrUndefinedOrEmpty", () =>
{
    function testMethod<T>(arrayLike?: ArrayLike<T> | null)
    {
        Ensure.arg(arrayLike, "arrayLike").isNotNull();
    }

    it("'[1,2,3,4]' should not throw an exception", () =>
    {
        try
        {
            testMethod([1,2,3,4]);
        }
        catch
        {
            assert.fail();
        }
    });

    it("'null' should throw an exception", (done) =>
    {
        try
        {
            testMethod(null);
            assert.fail();
        }
        catch
        {
            done();
        }
    });

    it("'undefined' should throw an exception", (done) =>
    {
        try
        {
            testMethod();
            assert.fail();
        }
        catch
        {
            done();
        }
    });

    it("'[]' should throw an exception", (done) =>
    {
        try
        {
            testMethod([]);
            assert.fail();
        }
        catch
        {
            done();
        }
    });
});