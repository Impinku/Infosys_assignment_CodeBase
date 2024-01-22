import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.deps.com.google.gson.JsonObject;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.junit.Assert;
import org.json.JSONObject;


public class StepDefinition {
public static String baseURL="https://itunes.apple.com";
    Response response;
    @Given("^Call i tunes search api$")
    public void Call_i_tunes_search_api() throws Throwable
    {
        connectRestAssured();
       System.out.println("Calling i tunes search");
    }

    @Given("^Call i tunes search api with invalid param$")
    public void Call_i_tunes_search_api_with_invalid_param() throws Throwable
    {
        RestAssured.baseURI = baseURL;
        RequestSpecification request = RestAssured.given();
        request.param("xyz","jack+johnson");
        response = request.get("/search");
        System.out.println(response.getBody().asString());
        System.out.println("Calling i tunes search");
    }

    @Given("^Call i tunes search api with \"([^\"]*)\" and \"([^\"]*)\"$")
    public void call_i_tunes_search_api_with_and(String arg1, String arg2) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        RestAssured.baseURI = baseURL;
        System.out.println(arg2);
        RequestSpecification request = RestAssured.given();
        request.param("term",arg1);
        request.param("limit",arg2);
        response = request.get("/search");
        System.out.println(response.getBody().asString());
        System.out.println("Calling i tunes search with limit");
    }
    @Given("^Call i tunes search api with \"([^\"]*)\" and entity \"([^\"]*)\"$")
    public void call_i_tunes_search_api_with_and_entity(String arg1, String arg2) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        RestAssured.baseURI = baseURL;
        System.out.println(arg2);
        RequestSpecification request = RestAssured.given();
        request.param("term",arg1);
        request.param("entity",arg2);
        response = request.get("/search");
        System.out.println(response.getBody().asString());
        System.out.println("Calling i tunes search with entity");
    }

    @Given("^Call i tunes search api with \"([^\"]*)\" and country \"([^\"]*)\"$")
    public void call_i_tunes_search_api_with_and_country(String arg1, String arg2) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        RestAssured.baseURI = baseURL;
        System.out.println(arg2);
        RequestSpecification request = RestAssured.given();
        request.param("term",arg1);
        request.param("country",arg2);
        response = request.get("/search");
        System.out.println(response.getBody().asString());
        System.out.println("Calling i tunes search with country");
    }

    @Given("^Call i tunes search api with \"([^\"]*)\" and country \"([^\"]*)\" and entity \"([^\"]*)\"$")
    public void call_i_tunes_search_api_with_and_country_and_entity(String arg1, String arg2, String arg3) throws Exception {
        // Write code here that turns the phrase above into concrete actions
        RestAssured.baseURI = baseURL;
        System.out.println(arg2);
        RequestSpecification request = RestAssured.given();
        request.param("term",arg1);
        request.param("country",arg2);
        request.param("entity",arg3);
        response = request.get("/search");
        System.out.println(response.getBody().asString());
        System.out.println("Calling i tunes search with term, country and entity");
    }

    @Given("^Verify status code is 200$")
    public void Verify_status_code_is_200() throws Throwable
    {
        Assert.assertEquals(response.getStatusCode(),200);
        System.out.println("Status code verified successfully");
    }

    @Given("^Verify result count is \"([^\"]*)\"$")
    public void Verify_result_count_is(int resultCount) throws Throwable
    {
        JSONObject obj=new JSONObject(response.getBody().asString());
        Assert.assertEquals(obj.getInt("resultCount"),resultCount);
        System.out.println("Result count verified successfully");
    }
    @Given("^Call i tunes search api without parameter$")
    public void Call_i_tunes_search_api_without_parameter() throws Throwable
    {
        RestAssured.baseURI = baseURL;
        RequestSpecification request = RestAssured.given();
        response = request.get("/search");
        System.out.println(response.getBody().asString());
        System.out.println("Calling i tunes search");
    }


    public void connectRestAssured(){
        RestAssured.baseURI = baseURL;
        RequestSpecification request = RestAssured.given();
        request.param("term","jack+johnson");
        response = request.get("/search");
        System.out.println(response.getBody().asString());

    }




}
