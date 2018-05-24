import 'mocha';
import { expect, assert } from 'chai';
import { Ensure } from '../src/index';
import { Guid } from '@michaelcoxon/utilities';

describe("Ensure a Guid isNotNull", () =>
{
    function testMethod(guid: Guid | null)
    {
        Ensure.arg(guid, "guid").isNotNull();
    }

    it("'Guid.newGuid()' should not throw an exception", () =>
    {
        try
        {
            testMethod(Guid.newGuid());
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

describe("Ensure a Guid isNotUndefined", () =>
{
    function testMethod(guid?: Guid)
    {
        Ensure.arg(guid, "guid").isNotUndefined();
    }

    it("'Guid.newGuid()' should not throw an exception", () =>
    {
        try
        {
            testMethod(Guid.newGuid());
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

describe("Ensure a Guid isNotNullOrUndefined", () =>
{
    function testMethod(guid?: Guid | null)
    {
        Ensure.arg(guid, "guid").isNotNullOrUndefined();
    }

    it("'Guid.newGuid()' should not throw an exception", () =>
    {
        try
        {
            testMethod(Guid.newGuid());
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

describe("Ensure a Guid isOneOf", () =>
{
    const guid1 = Guid.newGuid();
    const guid2 = Guid.newGuid();
    const guid3 = Guid.newGuid();
    const guid4 = Guid.newGuid();

    function testMethod(guid: Guid)
    {
        console.log(guid.toString());
        Ensure.arg(guid, "guid").isOneOf(guid1, guid2, guid3);
    }

    it("'guid1' should not throw an exception", () =>
    {
        let guid = Guid.parseString(guid1.toString());
        try
        {
            console.log("asdF");


            console.log(guid);

            testMethod(guid);
        }
        catch
        {
            assert.fail();
        }
    });

    it("'guid2' should not throw an exception", () =>
    {
        try
        {
            testMethod(Guid.parseString(guid2.toString()));
        }
        catch
        {
            assert.fail();
        }
    });

    it("'guid3' should not throw an exception", () =>
    {
        try
        {
            testMethod(Guid.parseString(guid3.toString()));
        }
        catch
        {
            assert.fail();
        }
    });

    it("'guid4' should throw an exception", (done) =>
    {
        try
        {
            testMethod(Guid.parseString(guid4.toString()));
            assert.fail();
        }
        catch
        {
            done();
        }
    });
});

describe("Ensure a Guid matches", () =>
{
    function testMethod(guid: Guid | null)
    {
        Ensure.arg(guid, "guid").matches(s => s === Guid.newGuid());
    }

    it("'Guid.newGuid()' should not throw an exception", () =>
    {
        try
        {
            testMethod(Guid.newGuid());
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