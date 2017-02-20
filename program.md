# NetologyXP.TDD.Anti-Patterns
  * Практические занятия по TDD (курс Нетологии http://netology.ru/programs/xp)

## План
1. Обзор анти-паттернов из каталога с примерами тестов
    * Obscure name.
    * Second Class Citizens. Test code isn't as well refactored as production code, containing a lot of duplicated code, making it hard to maintain tests.
    * The Free Ride / Piggyback. Rather than write a new test case method to test another/distinct feature/functionality, a new assertion (and its corresponding actions i.e. Act steps from AAA) rides along in an existing test case.
    * Happy Path. The test stays on happy paths (i.e. expected results) without testing for boundaries and exceptions.
    * The Local Hero. A test case that is dependent on something specific to the development environment it was written on in order to run. The result is the test passes on development boxes, but fails when someone attempts to run it elsewhere.
    * Chain Gang. A couple of tests that must run in a certain order, i.e. one test changes the global state of the system (global variables, data in the database) and the next test(s) depends on it. You often see this in database tests. Instead of doing a rollback in teardown(), tests commit their changes to the database. Another common cause is that changes to the global state aren't wrapped in try/finally blocks which clean up should the test fail.
    * The Mockery. Sometimes mocking can be good, and handy. But sometimes developers can lose themselves and in their effort to mock out what isn’t being tested. In this case, a unit test contains so many mocks, stubs, and/or fakes that the system under test isn’t even being tested at all, instead data returned from mocks is what is being tested.
    * The Silent Catcher. A test that passes if an exception is thrown.. even if the exception that actually occurs is one that is different than the one the developer intended.
    * The Test With No Name. The test that gets added to reproduce a specific bug in the bug tracker and whose author thinks does not warrant a name of its own. Instead of enhancing an existing, lacking test, a new test is created called testForBUG123. Two years later, when that test fails, you may need to first try and find BUG-123 in your bug tracker to figure out the test's intent.
2. Выводы.
3. Домашняя работа.

##
http://stackoverflow.com/questions/333682/unit-testing-anti-patterns-catalogue