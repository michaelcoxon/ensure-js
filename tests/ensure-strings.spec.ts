import 'mocha';
import { expect, assert } from 'chai';
import { Ensure } from '../src/index';

describe("Ensure a string isNotNull", () =>
{
    function testMethod(str: string | null)
    {
        Ensure.arg(str, "str").isNotNull();
    }

    it("'asdf' should not throw an exception", () =>
    {
        try
        {
            testMethod("asdf");
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

describe("Ensure a string isNotUndefined", () =>
{
    function testMethod(str?: string)
    {
        Ensure.arg(str, "str").isNotUndefined();
    }

    it("'asdf' should not throw an exception", () =>
    {
        try
        {
            testMethod("asdf");
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

describe("Ensure a string isNotNullOrUndefined", () =>
{
    function testMethod(str?: string | null)
    {
        Ensure.arg(str, "str").isNotNullOrUndefined();
    }

    it("'asdf' should not throw an exception", () =>
    {
        try
        {
            testMethod("asdf");
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

describe("Ensure a string isNotNullOrUndefinedOrEmpty", () =>
{
    function testMethod(str?: string | null)
    {
        Ensure.arg(str, "str").isNotNullOrUndefinedOrEmpty();
    }

    it("'asdf' should not throw an exception", () =>
    {
        try
        {
            testMethod("asdf");
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

    it("'' should throw an exception", (done) =>
    {
        try
        {
            testMethod("");
            assert.fail();
        }
        catch
        {
            done();
        }
    });
});

describe("Ensure a string isOneOf", () =>
{
    function testMethod(str: string)
    {
        Ensure.arg(str, "str").isOneOf("asdf", "", "fdsa");
    }

    it("'asdf' should not throw an exception", () =>
    {
        try
        {
            testMethod("asdf");
        }
        catch
        {
            assert.fail();
        }
    });

    it("'' should not throw an exception", () =>
    {
        try
        {
            testMethod("");
        }
        catch
        {
            assert.fail();
        }
    });

    it("'fdsa' should not throw an exception", () =>
    {
        try
        {
            testMethod("fdsa");
        }
        catch
        {
            assert.fail();
        }
    });

    it("'qwer' should throw an exception", (done) =>
    {
        try
        {
            testMethod("qwer");
            assert.fail();
        }
        catch
        {
            done();
        }
    });
});

describe("Ensure a string matches", () =>
{
    function testMethod(str: string | null)
    {
        Ensure.arg(str, "str").matches(s => s === "asdf");
    }

    it("'asdf' should not throw an exception", () =>
    {
        try
        {
            testMethod("asdf");
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

describe("Ensure a string matchesRegex", () =>
{
    function testMethod(str: string | null)
    {
        Ensure.arg(str, "str").matchesRegex(/^asdf$/);
    }

    it("'asdf' should not throw an exception", () =>
    {
        try
        {
            testMethod("asdf");
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
