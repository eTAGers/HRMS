import React from "react";
import { Grid, Box } from "@mui/material";
import Button from "@mui/material/Button";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { Link as RouterLink } from "react-router-dom";
import Typography from "@mui/material/Typography";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SendIcon from "@mui/icons-material/Send";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
export default function Createofferletter() {
  const [countrychange, setCountryChange] = React.useState("");
  const [statechange, setStateChange] = React.useState("");
  const [citychange, setCityChange] = React.useState("");
  const [designationchange, setDesignationChange] = React.useState("");
  const [employeetypechange, setEmployeeChange] = React.useState("");
  const [locationchange, setLocationChange] = React.useState("");
  const [departmentchange, setDepartmentChange] = React.useState("");
  const [genderchange, setGenderChange] = React.useState("");

  const handledDepartmentChange = (event) => {
    setDepartmentChange(event.target.value);
  };

  const handledGenderChange = (event) => {
    setGenderChange(event.target.value);
  };

  const handledCountryChange = (event) => {
    setCountryChange(event.target.value);
  };

  const handledStateChange = (event) => {
    setStateChange(event.target.value);
  };
  const handledCityChange = (event) => {
    setCityChange(event.target.value);
  };
  const handledDesignationChange = (event) => {
    setDesignationChange(event.target.value);
  };
  const handledEmployeeTypeChange = (event) => {
    setEmployeeChange(event.target.value);
  };
  const handledLocationChange = (event) => {
    setLocationChange(event.target.value);
  };
  return (
    <>
      <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid rows ml={"3.8rem"} mt={4}>
          <Grid md={12}>
            <Breadcrumbs aria-label="breadcrumb">
              <RouterLink to={"/"}>Home</RouterLink>
              <RouterLink to={"/Createofferletter"}>Offer and Other Letter</RouterLink>
              <Typography color="text.primary">Create Offer</Typography>
            </Breadcrumbs>
          </Grid>
        </Grid>
      </Grid>

      <Grid container sx={{ backgroundColor: "#f6f8f9" }}>
        <Grid
          rows
          mx={"3.8rem"}
          mt={4}
          md={12}
          direction={"row"}
          display={"flex"}
        >
          <Grid md={12}>
            <Typography variant="h5">Create Offer</Typography>
            <Box
              component="form"
              sx={{
                "& .MuiTextField-root": { m: 1, width: "25ch" },
                display: "flex",
                justifyContent: "center",
                backgroundColor: "#fff",
                alignContent: "center",
                margin: "1em",
                flexDirection: "column",
                padding: "3em 2em",
              }}
              noValidate
              autoComplete="off"
            >
              <Grid container md={12}>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="First Name"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>

                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Last Name"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "95% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={genderchange}
                      onChange={handledGenderChange}
                    >
                      <MenuItem value={0}>Male</MenuItem>
                      <MenuItem value={1}>Female</MenuItem>
                      <MenuItem value={2}>Other</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Phone No"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>

                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Personal Email"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Village / Colony"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Post / Area"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="District"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "95% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      Country
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={countrychange}
                      onChange={handledCountryChange}
                    >
                      <MenuItem value="AF" data-select2-id="29">
                        Afghanistan
                      </MenuItem>
                      <MenuItem value="AX" data-select2-id="30">
                        Aland Islands
                      </MenuItem>
                      <MenuItem value="AL" data-select2-id="31">
                        Albania
                      </MenuItem>
                      <MenuItem value="DZ" data-select2-id="32">
                        Algeria
                      </MenuItem>
                      <MenuItem value="AS" data-select2-id="33">
                        American Samoa
                      </MenuItem>
                      <MenuItem value="AD" data-select2-id="34">
                        Andorra
                      </MenuItem>
                      <MenuItem value="AO" data-select2-id="35">
                        Angola
                      </MenuItem>
                      <MenuItem value="AI" data-select2-id="36">
                        Anguilla
                      </MenuItem>
                      <MenuItem value="AQ" data-select2-id="37">
                        Antarctica
                      </MenuItem>
                      <MenuItem value="AG" data-select2-id="38">
                        Antigua And Barbuda
                      </MenuItem>
                      <MenuItem value="AR" data-select2-id="39">
                        Argentina
                      </MenuItem>
                      <MenuItem value="AM" data-select2-id="40">
                        Armenia
                      </MenuItem>
                      <MenuItem value="AW" data-select2-id="41">
                        Aruba
                      </MenuItem>
                      <MenuItem value="AU" data-select2-id="42">
                        Australia
                      </MenuItem>
                      <MenuItem value="AT" data-select2-id="43">
                        Austria
                      </MenuItem>
                      <MenuItem value="AZ" data-select2-id="44">
                        Azerbaijan
                      </MenuItem>
                      <MenuItem value="BH" data-select2-id="45">
                        Bahrain
                      </MenuItem>
                      <MenuItem value="BD" data-select2-id="46">
                        Bangladesh
                      </MenuItem>
                      <MenuItem value="BB" data-select2-id="47">
                        Barbados
                      </MenuItem>
                      <MenuItem value="BY" data-select2-id="48">
                        Belarus
                      </MenuItem>
                      <MenuItem value="BE" data-select2-id="49">
                        Belgium
                      </MenuItem>
                      <MenuItem value="BZ" data-select2-id="50">
                        Belize
                      </MenuItem>
                      <MenuItem value="BJ" data-select2-id="51">
                        Benin
                      </MenuItem>
                      <MenuItem value="BM" data-select2-id="52">
                        Bermuda
                      </MenuItem>
                      <MenuItem value="BT" data-select2-id="53">
                        Bhutan
                      </MenuItem>
                      <MenuItem value="BO" data-select2-id="54">
                        Bolivia
                      </MenuItem>
                      <MenuItem value="BQ" data-select2-id="55">
                        Bonaire, Sint Eustatius and Saba
                      </MenuItem>
                      <MenuItem value="BA" data-select2-id="56">
                        Bosnia and Herzegovina
                      </MenuItem>
                      <MenuItem value="BW" data-select2-id="57">
                        Botswana
                      </MenuItem>
                      <MenuItem value="BV" data-select2-id="58">
                        Bouvet Island
                      </MenuItem>
                      <MenuItem value="BR" data-select2-id="59">
                        Brazil
                      </MenuItem>
                      <MenuItem value="IO" data-select2-id="60">
                        British Indian Ocean Territory
                      </MenuItem>
                      <MenuItem value="BN" data-select2-id="61">
                        Brunei
                      </MenuItem>
                      <MenuItem value="BG" data-select2-id="62">
                        Bulgaria
                      </MenuItem>
                      <MenuItem value="BF" data-select2-id="63">
                        Burkina Faso
                      </MenuItem>
                      <MenuItem value="BI" data-select2-id="64">
                        Burundi
                      </MenuItem>
                      <MenuItem value="KH" data-select2-id="65">
                        Cambodia
                      </MenuItem>
                      <MenuItem value="CM" data-select2-id="66">
                        Cameroon
                      </MenuItem>
                      <MenuItem value="CA" data-select2-id="67">
                        Canada
                      </MenuItem>
                      <MenuItem value="CV" data-select2-id="68">
                        Cape Verde
                      </MenuItem>
                      <MenuItem value="KY" data-select2-id="69">
                        Cayman Islands
                      </MenuItem>
                      <MenuItem value="CF" data-select2-id="70">
                        Central African Republic
                      </MenuItem>
                      <MenuItem value="TD" data-select2-id="71">
                        Chad
                      </MenuItem>
                      <MenuItem value="CL" data-select2-id="72">
                        Chile
                      </MenuItem>
                      <MenuItem value="CN" data-select2-id="73">
                        China
                      </MenuItem>
                      <MenuItem value="CX" data-select2-id="74">
                        Christmas Island
                      </MenuItem>
                      <MenuItem value="CC" data-select2-id="75">
                        Cocos (Keeling) Islands
                      </MenuItem>
                      <MenuItem value="CO" data-select2-id="76">
                        Colombia
                      </MenuItem>
                      <MenuItem value="KM" data-select2-id="77">
                        Comoros
                      </MenuItem>
                      <MenuItem value="CG" data-select2-id="78">
                        Congo
                      </MenuItem>
                      <MenuItem value="CK" data-select2-id="79">
                        Cook Islands
                      </MenuItem>
                      <MenuItem value="CR" data-select2-id="80">
                        Costa Rica
                      </MenuItem>
                      <MenuItem value="CI" data-select2-id="81">
                        Cote D'Ivoire (Ivory Coast)
                      </MenuItem>
                      <MenuItem value="HR" data-select2-id="82">
                        Croatia
                      </MenuItem>
                      <MenuItem value="CU" data-select2-id="83">
                        Cuba
                      </MenuItem>
                      <MenuItem value="CW" data-select2-id="84">
                        Curaçao
                      </MenuItem>
                      <MenuItem value="CY" data-select2-id="85">
                        Cyprus
                      </MenuItem>
                      <MenuItem value="CZ" data-select2-id="86">
                        Czech Republic
                      </MenuItem>
                      <MenuItem value="CD" data-select2-id="87">
                        Democratic Republic of the Congo
                      </MenuItem>
                      <MenuItem value="DK" data-select2-id="88">
                        Denmark
                      </MenuItem>
                      <MenuItem value="DJ" data-select2-id="89">
                        Djibouti
                      </MenuItem>
                      <MenuItem value="DM" data-select2-id="90">
                        Dominica
                      </MenuItem>
                      <MenuItem value="DO" data-select2-id="91">
                        Dominican Republic
                      </MenuItem>
                      <MenuItem value="TL" data-select2-id="92">
                        East Timor
                      </MenuItem>
                      <MenuItem value="EC" data-select2-id="93">
                        Ecuador
                      </MenuItem>
                      <MenuItem value="EG" data-select2-id="94">
                        Egypt
                      </MenuItem>
                      <MenuItem value="SV" data-select2-id="95">
                        El Salvador
                      </MenuItem>
                      <MenuItem value="GQ" data-select2-id="96">
                        Equatorial Guinea
                      </MenuItem>
                      <MenuItem value="ER" data-select2-id="97">
                        Eritrea
                      </MenuItem>
                      <MenuItem value="EE" data-select2-id="98">
                        Estonia
                      </MenuItem>
                      <MenuItem value="ET" data-select2-id="99">
                        Ethiopia
                      </MenuItem>
                      <MenuItem value="FK" data-select2-id="100">
                        Falkland Islands
                      </MenuItem>
                      <MenuItem value="FO" data-select2-id="101">
                        Faroe Islands
                      </MenuItem>
                      <MenuItem value="FJ" data-select2-id="102">
                        Fiji Islands
                      </MenuItem>
                      <MenuItem value="FI" data-select2-id="103">
                        Finland
                      </MenuItem>
                      <MenuItem value="FR" data-select2-id="104">
                        France
                      </MenuItem>
                      <MenuItem value="GF" data-select2-id="105">
                        French Guiana
                      </MenuItem>
                      <MenuItem value="PF" data-select2-id="106">
                        French Polynesia
                      </MenuItem>
                      <MenuItem value="TF" data-select2-id="107">
                        French Southern Territories
                      </MenuItem>
                      <MenuItem value="GA" data-select2-id="108">
                        Gabon
                      </MenuItem>
                      <MenuItem value="GM" data-select2-id="109">
                        Gambia The
                      </MenuItem>
                      <MenuItem value="GE" data-select2-id="110">
                        Georgia
                      </MenuItem>
                      <MenuItem value="DE" data-select2-id="111">
                        Germany
                      </MenuItem>
                      <MenuItem value="GH" data-select2-id="112">
                        Ghana
                      </MenuItem>
                      <MenuItem value="GI" data-select2-id="113">
                        Gibraltar
                      </MenuItem>
                      <MenuItem value="GR" data-select2-id="114">
                        Greece
                      </MenuItem>
                      <MenuItem value="GL" data-select2-id="115">
                        Greenland
                      </MenuItem>
                      <MenuItem value="GD" data-select2-id="116">
                        Grenada
                      </MenuItem>
                      <MenuItem value="GP" data-select2-id="117">
                        Guadeloupe
                      </MenuItem>
                      <MenuItem value="GU" data-select2-id="118">
                        Guam
                      </MenuItem>
                      <MenuItem value="GT" data-select2-id="119">
                        Guatemala
                      </MenuItem>
                      <MenuItem value="GG" data-select2-id="120">
                        Guernsey and Alderney
                      </MenuItem>
                      <MenuItem value="GN" data-select2-id="121">
                        Guinea
                      </MenuItem>
                      <MenuItem value="GW" data-select2-id="122">
                        Guinea-Bissau
                      </MenuItem>
                      <MenuItem value="GY" data-select2-id="123">
                        Guyana
                      </MenuItem>
                      <MenuItem value="HT" data-select2-id="124">
                        Haiti
                      </MenuItem>
                      <MenuItem value="HM" data-select2-id="125">
                        Heard Island and McDonald Islands
                      </MenuItem>
                      <MenuItem value="HN" data-select2-id="126">
                        Honduras
                      </MenuItem>
                      <MenuItem value="HK" data-select2-id="127">
                        Hong Kong S.A.R.
                      </MenuItem>
                      <MenuItem value="HU" data-select2-id="128">
                        Hungary
                      </MenuItem>
                      <MenuItem value="IS" data-select2-id="129">
                        Iceland
                      </MenuItem>
                      <MenuItem value="IN" data-select2-id="130">
                        India
                      </MenuItem>
                      <MenuItem value="ID" data-select2-id="131">
                        Indonesia
                      </MenuItem>
                      <MenuItem value="IR" data-select2-id="132">
                        Iran
                      </MenuItem>
                      <MenuItem value="IQ" data-select2-id="133">
                        Iraq
                      </MenuItem>
                      <MenuItem value="IE" data-select2-id="134">
                        Ireland
                      </MenuItem>
                      <MenuItem value="IL" data-select2-id="135">
                        Israel
                      </MenuItem>
                      <MenuItem value="IT" data-select2-id="136">
                        Italy
                      </MenuItem>
                      <MenuItem value="JM" data-select2-id="137">
                        Jamaica
                      </MenuItem>
                      <MenuItem value="JP" data-select2-id="138">
                        Japan
                      </MenuItem>
                      <MenuItem value="JE" data-select2-id="139">
                        Jersey
                      </MenuItem>
                      <MenuItem value="JO" data-select2-id="140">
                        Jordan
                      </MenuItem>
                      <MenuItem value="KZ" data-select2-id="141">
                        Kazakhstan
                      </MenuItem>
                      <MenuItem value="KE" data-select2-id="142">
                        Kenya
                      </MenuItem>
                      <MenuItem value="KI" data-select2-id="143">
                        Kiribati
                      </MenuItem>
                      <MenuItem value="XK" data-select2-id="144">
                        Kosovo
                      </MenuItem>
                      <MenuItem value="KW" data-select2-id="145">
                        Kuwait
                      </MenuItem>
                      <MenuItem value="KG" data-select2-id="146">
                        Kyrgyzstan
                      </MenuItem>
                      <MenuItem value="LA" data-select2-id="147">
                        Laos
                      </MenuItem>
                      <MenuItem value="LV" data-select2-id="148">
                        Latvia
                      </MenuItem>
                      <MenuItem value="LB" data-select2-id="149">
                        Lebanon
                      </MenuItem>
                      <MenuItem value="LS" data-select2-id="150">
                        Lesotho
                      </MenuItem>
                      <MenuItem value="LR" data-select2-id="151">
                        Liberia
                      </MenuItem>
                      <MenuItem value="LY" data-select2-id="152">
                        Libya
                      </MenuItem>
                      <MenuItem value="LI" data-select2-id="153">
                        Liechtenstein
                      </MenuItem>
                      <MenuItem value="LT" data-select2-id="154">
                        Lithuania
                      </MenuItem>
                      <MenuItem value="LU" data-select2-id="155">
                        Luxembourg
                      </MenuItem>
                      <MenuItem value="MO" data-select2-id="156">
                        Macau S.A.R.
                      </MenuItem>
                      <MenuItem value="MK" data-select2-id="157">
                        Macedonia
                      </MenuItem>
                      <MenuItem value="MG" data-select2-id="158">
                        Madagascar
                      </MenuItem>
                      <MenuItem value="MW" data-select2-id="159">
                        Malawi
                      </MenuItem>
                      <MenuItem value="MY" data-select2-id="160">
                        Malaysia
                      </MenuItem>
                      <MenuItem value="MV" data-select2-id="161">
                        Maldives
                      </MenuItem>
                      <MenuItem value="ML" data-select2-id="162">
                        Mali
                      </MenuItem>
                      <MenuItem value="MT" data-select2-id="163">
                        Malta
                      </MenuItem>
                      <MenuItem value="IM" data-select2-id="164">
                        Man (Isle of)
                      </MenuItem>
                      <MenuItem value="MH" data-select2-id="165">
                        Marshall Islands
                      </MenuItem>
                      <MenuItem value="MQ" data-select2-id="166">
                        Martinique
                      </MenuItem>
                      <MenuItem value="MR" data-select2-id="167">
                        Mauritania
                      </MenuItem>
                      <MenuItem value="MU" data-select2-id="168">
                        Mauritius
                      </MenuItem>
                      <MenuItem value="YT" data-select2-id="169">
                        Mayotte
                      </MenuItem>
                      <MenuItem value="MX" data-select2-id="170">
                        Mexico
                      </MenuItem>
                      <MenuItem value="FM" data-select2-id="171">
                        Micronesia
                      </MenuItem>
                      <MenuItem value="MD" data-select2-id="172">
                        Moldova
                      </MenuItem>
                      <MenuItem value="MC" data-select2-id="173">
                        Monaco
                      </MenuItem>
                      <MenuItem value="MN" data-select2-id="174">
                        Mongolia
                      </MenuItem>
                      <MenuItem value="ME" data-select2-id="175">
                        Montenegro
                      </MenuItem>
                      <MenuItem value="MS" data-select2-id="176">
                        Montserrat
                      </MenuItem>
                      <MenuItem value="MA" data-select2-id="177">
                        Morocco
                      </MenuItem>
                      <MenuItem value="MZ" data-select2-id="178">
                        Mozambique
                      </MenuItem>
                      <MenuItem value="MM" data-select2-id="179">
                        Myanmar
                      </MenuItem>
                      <MenuItem value="NA" data-select2-id="180">
                        Namibia
                      </MenuItem>
                      <MenuItem value="NR" data-select2-id="181">
                        Nauru
                      </MenuItem>
                      <MenuItem value="NP" data-select2-id="182">
                        Nepal
                      </MenuItem>
                      <MenuItem value="NL" data-select2-id="183">
                        Netherlands
                      </MenuItem>
                      <MenuItem value="NC" data-select2-id="184">
                        New Caledonia
                      </MenuItem>
                      <MenuItem value="NZ" data-select2-id="185">
                        New Zealand
                      </MenuItem>
                      <MenuItem value="NI" data-select2-id="186">
                        Nicaragua
                      </MenuItem>
                      <MenuItem value="NE" data-select2-id="187">
                        Niger
                      </MenuItem>
                      <MenuItem value="NG" data-select2-id="188">
                        Nigeria
                      </MenuItem>
                      <MenuItem value="NU" data-select2-id="189">
                        Niue
                      </MenuItem>
                      <MenuItem value="NF" data-select2-id="190">
                        Norfolk Island
                      </MenuItem>
                      <MenuItem value="KP" data-select2-id="191">
                        North Korea
                      </MenuItem>
                      <MenuItem value="MP" data-select2-id="192">
                        Northern Mariana Islands
                      </MenuItem>
                      <MenuItem value="NO" data-select2-id="193">
                        Norway
                      </MenuItem>
                      <MenuItem value="OM" data-select2-id="194">
                        Oman
                      </MenuItem>
                      <MenuItem value="PK" data-select2-id="195">
                        Pakistan
                      </MenuItem>
                      <MenuItem value="PW" data-select2-id="196">
                        Palau
                      </MenuItem>
                      <MenuItem value="PS" data-select2-id="197">
                        Palestinian Territory Occupied
                      </MenuItem>
                      <MenuItem value="PA" data-select2-id="198">
                        Panama
                      </MenuItem>
                      <MenuItem value="PG" data-select2-id="199">
                        Papua new Guinea
                      </MenuItem>
                      <MenuItem value="PY" data-select2-id="200">
                        Paraguay
                      </MenuItem>
                      <MenuItem value="PE" data-select2-id="201">
                        Peru
                      </MenuItem>
                      <MenuItem value="PH" data-select2-id="202">
                        Philippines
                      </MenuItem>
                      <MenuItem value="PN" data-select2-id="203">
                        Pitcairn Island
                      </MenuItem>
                      <MenuItem value="PL" data-select2-id="204">
                        Poland
                      </MenuItem>
                      <MenuItem value="PT" data-select2-id="205">
                        Portugal
                      </MenuItem>
                      <MenuItem value="PR" data-select2-id="206">
                        Puerto Rico
                      </MenuItem>
                      <MenuItem value="QA" data-select2-id="207">
                        Qatar
                      </MenuItem>
                      <MenuItem value="RE" data-select2-id="208">
                        Reunion
                      </MenuItem>
                      <MenuItem value="RO" data-select2-id="209">
                        Romania
                      </MenuItem>
                      <MenuItem value="RU" data-select2-id="210">
                        Russia
                      </MenuItem>
                      <MenuItem value="RW" data-select2-id="211">
                        Rwanda
                      </MenuItem>
                      <MenuItem value="SH" data-select2-id="212">
                        Saint Helena
                      </MenuItem>
                      <MenuItem value="KN" data-select2-id="213">
                        Saint Kitts And Nevis
                      </MenuItem>
                      <MenuItem value="LC" data-select2-id="214">
                        Saint Lucia
                      </MenuItem>
                      <MenuItem value="PM" data-select2-id="215">
                        Saint Pierre and Miquelon
                      </MenuItem>
                      <MenuItem value="VC" data-select2-id="216">
                        Saint Vincent And The Grenadines
                      </MenuItem>
                      <MenuItem value="BL" data-select2-id="217">
                        Saint-Barthelemy
                      </MenuItem>
                      <MenuItem value="MF" data-select2-id="218">
                        Saint-Martin (French part)
                      </MenuItem>
                      <MenuItem value="WS" data-select2-id="219">
                        Samoa
                      </MenuItem>
                      <MenuItem value="SM" data-select2-id="220">
                        San Marino
                      </MenuItem>
                      <MenuItem value="ST" data-select2-id="221">
                        Sao Tome and Principe
                      </MenuItem>
                      <MenuItem value="SA" data-select2-id="222">
                        Saudi Arabia
                      </MenuItem>
                      <MenuItem value="SN" data-select2-id="223">
                        Senegal
                      </MenuItem>
                      <MenuItem value="RS" data-select2-id="224">
                        Serbia
                      </MenuItem>
                      <MenuItem value="SC" data-select2-id="225">
                        Seychelles
                      </MenuItem>
                      <MenuItem value="SL" data-select2-id="226">
                        Sierra Leone
                      </MenuItem>
                      <MenuItem value="SG" data-select2-id="227">
                        Singapore
                      </MenuItem>
                      <MenuItem value="SX" data-select2-id="228">
                        Sint Maarten (Dutch part)
                      </MenuItem>
                      <MenuItem value="SK" data-select2-id="229">
                        Slovakia
                      </MenuItem>
                      <MenuItem value="SI" data-select2-id="230">
                        Slovenia
                      </MenuItem>
                      <MenuItem value="SB" data-select2-id="231">
                        Solomon Islands
                      </MenuItem>
                      <MenuItem value="SO" data-select2-id="232">
                        Somalia
                      </MenuItem>
                      <MenuItem value="ZA" data-select2-id="233">
                        South Africa
                      </MenuItem>
                      <MenuItem value="GS" data-select2-id="234">
                        South Georgia
                      </MenuItem>
                      <MenuItem value="KR" data-select2-id="235">
                        South Korea
                      </MenuItem>
                      <MenuItem value="SS" data-select2-id="236">
                        South Sudan
                      </MenuItem>
                      <MenuItem value="ES" data-select2-id="237">
                        Spain
                      </MenuItem>
                      <MenuItem value="LK" data-select2-id="238">
                        Sri Lanka
                      </MenuItem>
                      <MenuItem value="SD" data-select2-id="239">
                        Sudan
                      </MenuItem>
                      <MenuItem value="SR" data-select2-id="240">
                        Suriname
                      </MenuItem>
                      <MenuItem value="SJ" data-select2-id="241">
                        Svalbard And Jan Mayen Islands
                      </MenuItem>
                      <MenuItem value="SZ" data-select2-id="242">
                        Swaziland
                      </MenuItem>
                      <MenuItem value="SE" data-select2-id="243">
                        Sweden
                      </MenuItem>
                      <MenuItem value="CH" data-select2-id="244">
                        Switzerland
                      </MenuItem>
                      <MenuItem value="SY" data-select2-id="245">
                        Syria
                      </MenuItem>
                      <MenuItem value="TW" data-select2-id="246">
                        Taiwan
                      </MenuItem>
                      <MenuItem value="TJ" data-select2-id="247">
                        Tajikistan
                      </MenuItem>
                      <MenuItem value="TZ" data-select2-id="248">
                        Tanzania
                      </MenuItem>
                      <MenuItem value="TH" data-select2-id="249">
                        Thailand
                      </MenuItem>
                      <MenuItem value="BS" data-select2-id="250">
                        The Bahamas
                      </MenuItem>
                      <MenuItem value="TG" data-select2-id="251">
                        Togo
                      </MenuItem>
                      <MenuItem value="TK" data-select2-id="252">
                        Tokelau
                      </MenuItem>
                      <MenuItem value="TO" data-select2-id="253">
                        Tonga
                      </MenuItem>
                      <MenuItem value="TT" data-select2-id="254">
                        Trinidad And Tobago
                      </MenuItem>
                      <MenuItem value="TN" data-select2-id="255">
                        Tunisia
                      </MenuItem>
                      <MenuItem value="TR" data-select2-id="256">
                        Turkey
                      </MenuItem>
                      <MenuItem value="TM" data-select2-id="257">
                        Turkmenistan
                      </MenuItem>
                      <MenuItem value="TC" data-select2-id="258">
                        Turks And Caicos Islands
                      </MenuItem>
                      <MenuItem value="TV" data-select2-id="259">
                        Tuvalu
                      </MenuItem>
                      <MenuItem value="UG" data-select2-id="260">
                        Uganda
                      </MenuItem>
                      <MenuItem value="UA" data-select2-id="261">
                        Ukraine
                      </MenuItem>
                      <MenuItem value="AE" data-select2-id="262">
                        United Arab Emirates
                      </MenuItem>
                      <MenuItem value="GB" data-select2-id="263">
                        United Kingdom
                      </MenuItem>
                      <MenuItem value="US" data-select2-id="264">
                        United States
                      </MenuItem>
                      <MenuItem value="UM" data-select2-id="265">
                        United States Minor Outlying Islands
                      </MenuItem>
                      <MenuItem value="UY" data-select2-id="266">
                        Uruguay
                      </MenuItem>
                      <MenuItem value="UZ" data-select2-id="267">
                        Uzbekistan
                      </MenuItem>
                      <MenuItem value="VU" data-select2-id="268">
                        Vanuatu
                      </MenuItem>
                      <MenuItem value="VA" data-select2-id="269">
                        Vatican City State (Holy See)
                      </MenuItem>
                      <MenuItem value="VE" data-select2-id="270">
                        Venezuela
                      </MenuItem>
                      <MenuItem value="VN" data-select2-id="271">
                        Vietnam
                      </MenuItem>
                      <MenuItem value="VG" data-select2-id="272">
                        Virgin Islands (British)
                      </MenuItem>
                      <MenuItem value="VI" data-select2-id="273">
                        Virgin Islands (US)
                      </MenuItem>
                      <MenuItem value="WF" data-select2-id="274">
                        Wallis And Futuna Islands
                      </MenuItem>
                      <MenuItem value="EH" data-select2-id="275">
                        Western Sahara
                      </MenuItem>
                      <MenuItem value="YE" data-select2-id="276">
                        Yemen
                      </MenuItem>
                      <MenuItem value="ZM" data-select2-id="277">
                        Zambia
                      </MenuItem>
                      <MenuItem value="ZW" data-select2-id="278">
                        Zimbabwe
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "95% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      State
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={statechange}
                      onChange={handledStateChange}
                    >
                      <MenuItem
                        value="AN"
                        data-country="IN"
                        data-select2-id="286"
                      >
                        Andaman and Nicobar Islands
                      </MenuItem>
                      <MenuItem
                        value="AP"
                        data-country="IN"
                        data-select2-id="288"
                      >
                        Andhra Pradesh
                      </MenuItem>
                      <MenuItem
                        value="AR"
                        data-country="IN"
                        data-select2-id="289"
                      >
                        Arunachal Pradesh
                      </MenuItem>
                      <MenuItem
                        value="AS"
                        data-country="IN"
                        data-select2-id="290"
                      >
                        Assam
                      </MenuItem>
                      <MenuItem
                        value="BR"
                        data-country="IN"
                        data-select2-id="291"
                      >
                        Bihar
                      </MenuItem>
                      <MenuItem
                        value="CH"
                        data-country="IN"
                        data-select2-id="292"
                      >
                        Chandigarh
                      </MenuItem>
                      <MenuItem
                        value="CT"
                        data-country="IN"
                        data-select2-id="293"
                      >
                        Chhattisgarh
                      </MenuItem>
                      <MenuItem
                        value="DH"
                        data-country="IN"
                        data-select2-id="294"
                      >
                        Dadra and Nagar Haveli and Daman and Diu
                      </MenuItem>
                      <MenuItem
                        value="DL"
                        data-country="IN"
                        data-select2-id="295"
                      >
                        Delhi
                      </MenuItem>
                      <MenuItem
                        value="GA"
                        data-country="IN"
                        data-select2-id="296"
                      >
                        Goa
                      </MenuItem>
                      <MenuItem
                        value="GJ"
                        data-country="IN"
                        data-select2-id="297"
                      >
                        Gujarat
                      </MenuItem>
                      <MenuItem
                        value="HR"
                        data-country="IN"
                        data-select2-id="298"
                      >
                        Haryana
                      </MenuItem>
                      <MenuItem
                        value="HP"
                        data-country="IN"
                        data-select2-id="299"
                      >
                        Himachal Pradesh
                      </MenuItem>
                      <MenuItem
                        value="JK"
                        data-country="IN"
                        data-select2-id="300"
                      >
                        Jammu and Kashmir
                      </MenuItem>
                      <MenuItem
                        value="JH"
                        data-country="IN"
                        data-select2-id="301"
                      >
                        Jharkhand
                      </MenuItem>
                      <MenuItem
                        value="KA"
                        data-country="IN"
                        data-select2-id="302"
                      >
                        Karnataka
                      </MenuItem>
                      <MenuItem
                        value="KL"
                        data-country="IN"
                        data-select2-id="303"
                      >
                        Kerala
                      </MenuItem>
                      <MenuItem
                        value="LA"
                        data-country="IN"
                        data-select2-id="304"
                      >
                        Ladakh
                      </MenuItem>
                      <MenuItem
                        value="LD"
                        data-country="IN"
                        data-select2-id="305"
                      >
                        Lakshadweep
                      </MenuItem>
                      <MenuItem
                        value="MP"
                        data-country="IN"
                        data-select2-id="306"
                      >
                        Madhya Pradesh
                      </MenuItem>
                      <MenuItem
                        value="MH"
                        data-country="IN"
                        data-select2-id="307"
                      >
                        Maharashtra
                      </MenuItem>
                      <MenuItem
                        value="MN"
                        data-country="IN"
                        data-select2-id="308"
                      >
                        Manipur
                      </MenuItem>
                      <MenuItem
                        value="ML"
                        data-country="IN"
                        data-select2-id="309"
                      >
                        Meghalaya
                      </MenuItem>
                      <MenuItem
                        value="MZ"
                        data-country="IN"
                        data-select2-id="310"
                      >
                        Mizoram
                      </MenuItem>
                      <MenuItem
                        value="NL"
                        data-country="IN"
                        data-select2-id="311"
                      >
                        Nagaland
                      </MenuItem>
                      <MenuItem
                        value="OR"
                        data-country="IN"
                        data-select2-id="312"
                      >
                        Odisha
                      </MenuItem>
                      <MenuItem
                        value="PY"
                        data-country="IN"
                        data-select2-id="313"
                      >
                        Puducherry
                      </MenuItem>
                      <MenuItem
                        value="PB"
                        data-country="IN"
                        data-select2-id="314"
                      >
                        Punjab
                      </MenuItem>
                      <MenuItem
                        value="RJ"
                        data-country="IN"
                        data-select2-id="315"
                      >
                        Rajasthan
                      </MenuItem>
                      <MenuItem
                        value="SK"
                        data-country="IN"
                        data-select2-id="316"
                      >
                        Sikkim
                      </MenuItem>
                      <MenuItem
                        value="TN"
                        data-country="IN"
                        data-select2-id="317"
                      >
                        Tamil Nadu
                      </MenuItem>
                      <MenuItem
                        value="TG"
                        data-country="IN"
                        data-select2-id="318"
                      >
                        Telangana
                      </MenuItem>
                      <MenuItem
                        value="TR"
                        data-country="IN"
                        data-select2-id="319"
                      >
                        Tripura
                      </MenuItem>
                      <MenuItem
                        value="UP"
                        data-country="IN"
                        data-select2-id="320"
                      >
                        Uttar Pradesh
                      </MenuItem>
                      <MenuItem
                        value="UT"
                        data-country="IN"
                        data-select2-id="321"
                      >
                        Uttarakhand
                      </MenuItem>
                      <MenuItem
                        value="WB"
                        data-country="IN"
                        data-select2-id="322"
                      >
                        West Bengal
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                    variant="filled"
                    sx={{ m: 1, width: "95% !important" }}
                  >
                    <InputLabel id="demo-simple-select-filled-label">
                      City
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-filled-label"
                      id="demo-simple-select-filled"
                      value={citychange}
                      onChange={handledCityChange}
                    >
                      <MenuItem
                        data-id="57586"
                        value="57586"
                        data-select2-id="329"
                      >
                        Abiramam
                      </MenuItem>
                      <MenuItem
                        data-id="57594"
                        value="57594"
                        data-select2-id="331"
                      >
                        Adirampattinam
                      </MenuItem>
                      <MenuItem
                        data-id="57595"
                        value="57595"
                        data-select2-id="332"
                      >
                        Aduthurai
                      </MenuItem>
                      <MenuItem
                        data-id="57630"
                        value="57630"
                        data-select2-id="333"
                      >
                        Alagapuram
                      </MenuItem>
                      <MenuItem
                        data-id="57634"
                        value="57634"
                        data-select2-id="334"
                      >
                        Alandur
                      </MenuItem>
                      <MenuItem
                        data-id="57635"
                        value="57635"
                        data-select2-id="335"
                      >
                        Alanganallur
                      </MenuItem>
                      <MenuItem
                        data-id="57636"
                        value="57636"
                        data-select2-id="336"
                      >
                        Alangayam
                      </MenuItem>
                      <MenuItem
                        data-id="134455"
                        value="134455"
                        data-select2-id="337"
                      >
                        Alangudi
                      </MenuItem>
                      <MenuItem
                        data-id="134456"
                        value="134456"
                        data-select2-id="338"
                      >
                        Alangulam
                      </MenuItem>
                      <MenuItem
                        data-id="134457"
                        value="134457"
                        data-select2-id="339"
                      >
                        Alappakkam
                      </MenuItem>
                      <MenuItem
                        data-id="57648"
                        value="57648"
                        data-select2-id="340"
                      >
                        Alwa Tirunagari
                      </MenuItem>
                      <MenuItem
                        data-id="57667"
                        value="57667"
                        data-select2-id="341"
                      >
                        Ambasamudram
                      </MenuItem>
                      <MenuItem
                        data-id="57668"
                        value="57668"
                        data-select2-id="342"
                      >
                        Ambattur
                      </MenuItem>
                      <MenuItem
                        data-id="57671"
                        value="57671"
                        data-select2-id="343"
                      >
                        Ambur
                      </MenuItem>
                      <MenuItem
                        data-id="57682"
                        value="57682"
                        data-select2-id="344"
                      >
                        Ammapettai
                      </MenuItem>
                      <MenuItem
                        data-id="57694"
                        value="57694"
                        data-select2-id="345"
                      >
                        Anamalais
                      </MenuItem>
                      <MenuItem
                        data-id="134460"
                        value="134460"
                        data-select2-id="346"
                      >
                        Andippatti
                      </MenuItem>
                      <MenuItem
                        data-id="57715"
                        value="57715"
                        data-select2-id="347"
                      >
                        Annamalainagar
                      </MenuItem>
                      <MenuItem
                        data-id="57712"
                        value="57712"
                        data-select2-id="348"
                      >
                        Annavasal
                      </MenuItem>
                      <MenuItem
                        data-id="57714"
                        value="57714"
                        data-select2-id="349"
                      >
                        Annur
                      </MenuItem>
                      <MenuItem
                        data-id="57718"
                        value="57718"
                        data-select2-id="350"
                      >
                        Anthiyur
                      </MenuItem>
                      <MenuItem
                        data-id="57726"
                        value="57726"
                        data-select2-id="351"
                      >
                        Arakkonam
                      </MenuItem>
                      <MenuItem
                        data-id="57729"
                        value="57729"
                        data-select2-id="352"
                      >
                        Arantangi
                      </MenuItem>
                      <MenuItem
                        data-id="57731"
                        value="57731"
                        data-select2-id="353"
                      >
                        Arcot
                      </MenuItem>
                      <MenuItem
                        data-id="57732"
                        value="57732"
                        data-select2-id="354"
                      >
                        Arimalam
                      </MenuItem>
                      <MenuItem
                        data-id="57733"
                        value="57733"
                        data-select2-id="355"
                      >
                        Ariyalur
                      </MenuItem>
                      <MenuItem
                        data-id="57737"
                        value="57737"
                        data-select2-id="356"
                      >
                        Arni
                      </MenuItem>
                      <MenuItem
                        data-id="57743"
                        value="57743"
                        data-select2-id="357"
                      >
                        Arumbavur
                      </MenuItem>
                      <MenuItem
                        data-id="57744"
                        value="57744"
                        data-select2-id="358"
                      >
                        Arumuganeri
                      </MenuItem>
                      <MenuItem
                        data-id="57745"
                        value="57745"
                        data-select2-id="359"
                      >
                        Aruppukkottai
                      </MenuItem>
                      <MenuItem
                        data-id="57746"
                        value="57746"
                        data-select2-id="360"
                      >
                        Aruvankad
                      </MenuItem>
                      <MenuItem
                        data-id="134468"
                        value="134468"
                        data-select2-id="361"
                      >
                        Attayyampatti
                      </MenuItem>
                      <MenuItem
                        data-id="57763"
                        value="57763"
                        data-select2-id="362"
                      >
                        Attur
                      </MenuItem>
                      <MenuItem
                        data-id="57767"
                        value="57767"
                        data-select2-id="363"
                      >
                        Auroville
                      </MenuItem>
                      <MenuItem
                        data-id="134469"
                        value="134469"
                        data-select2-id="364"
                      >
                        Avadi
                      </MenuItem>
                      <MenuItem
                        data-id="57773"
                        value="57773"
                        data-select2-id="365"
                      >
                        Avinashi
                      </MenuItem>
                      <MenuItem
                        data-id="57775"
                        value="57775"
                        data-select2-id="366"
                      >
                        Ayakudi
                      </MenuItem>
                      <MenuItem
                        data-id="57776"
                        value="57776"
                        data-select2-id="367"
                      >
                        Ayyampettai
                      </MenuItem>
                      <MenuItem
                        data-id="57929"
                        value="57929"
                        data-select2-id="368"
                      >
                        Belur
                      </MenuItem>
                      <MenuItem
                        data-id="57973"
                        value="57973"
                        data-select2-id="369"
                      >
                        Bhavani
                      </MenuItem>
                      <MenuItem
                        data-id="58072"
                        value="58072"
                        data-select2-id="370"
                      >
                        Bodinayakkanur
                      </MenuItem>
                      <MenuItem
                        data-id="131515"
                        value="131515"
                        data-select2-id="371"
                      >
                        Chengam
                      </MenuItem>
                      <MenuItem
                        data-id="131517"
                        value="131517"
                        data-select2-id="372"
                      >
                        Chennai
                      </MenuItem>
                      <MenuItem
                        data-id="131518"
                        value="131518"
                        data-select2-id="373"
                      >
                        Chennimalai
                      </MenuItem>
                      <MenuItem
                        data-id="131522"
                        value="131522"
                        data-select2-id="374"
                      >
                        Chetput
                      </MenuItem>
                      <MenuItem
                        data-id="131523"
                        value="131523"
                        data-select2-id="375"
                      >
                        Chettipalaiyam
                      </MenuItem>
                      <MenuItem
                        data-id="131525"
                        value="131525"
                        data-select2-id="376"
                      >
                        Cheyyar
                      </MenuItem>
                      <MenuItem
                        data-id="131526"
                        value="131526"
                        data-select2-id="377"
                      >
                        Cheyyur
                      </MenuItem>
                      <MenuItem
                        data-id="131545"
                        value="131545"
                        data-select2-id="378"
                      >
                        Chidambaram
                      </MenuItem>
                      <MenuItem
                        data-id="131561"
                        value="131561"
                        data-select2-id="379"
                      >
                        Chingleput
                      </MenuItem>
                      <MenuItem
                        data-id="131562"
                        value="131562"
                        data-select2-id="380"
                      >
                        Chinna Salem
                      </MenuItem>
                      <MenuItem
                        data-id="131564"
                        value="131564"
                        data-select2-id="381"
                      >
                        Chinnamanur
                      </MenuItem>
                      <MenuItem
                        data-id="131565"
                        value="131565"
                        data-select2-id="382"
                      >
                        Chinnasekkadu
                      </MenuItem>
                      <MenuItem
                        data-id="131578"
                        value="131578"
                        data-select2-id="383"
                      >
                        Cholapuram
                      </MenuItem>
                      <MenuItem
                        data-id="131618"
                        value="131618"
                        data-select2-id="384"
                      >
                        Coimbatore
                      </MenuItem>
                      <MenuItem
                        data-id="131619"
                        value="131619"
                        data-select2-id="385"
                      >
                        Colachel
                      </MenuItem>
                      <MenuItem
                        data-id="131626"
                        value="131626"
                        data-select2-id="386"
                      >
                        Cuddalore
                      </MenuItem>
                      <MenuItem
                        data-id="131629"
                        value="131629"
                        data-select2-id="387"
                      >
                        Cumbum
                      </MenuItem>
                      <MenuItem
                        data-id="131681"
                        value="131681"
                        data-select2-id="388"
                      >
                        Denkanikota
                      </MenuItem>
                      <MenuItem
                        data-id="131698"
                        value="131698"
                        data-select2-id="389"
                      >
                        Desur
                      </MenuItem>
                      <MenuItem
                        data-id="131699"
                        value="131699"
                        data-select2-id="390"
                      >
                        Devadanappatti
                      </MenuItem>
                      <MenuItem
                        data-id="131700"
                        value="131700"
                        data-select2-id="391"
                      >
                        Devakottai
                      </MenuItem>
                      <MenuItem
                        data-id="131711"
                        value="131711"
                        data-select2-id="392"
                      >
                        Dhali
                      </MenuItem>
                      <MenuItem
                        data-id="131723"
                        value="131723"
                        data-select2-id="393"
                      >
                        Dharapuram
                      </MenuItem>
                      <MenuItem
                        data-id="131726"
                        value="131726"
                        data-select2-id="394"
                      >
                        Dharmapuri
                      </MenuItem>
                      <MenuItem
                        data-id="131774"
                        value="131774"
                        data-select2-id="395"
                      >
                        Dindigul
                      </MenuItem>
                      <MenuItem
                        data-id="131820"
                        value="131820"
                        data-select2-id="396"
                      >
                        Dusi
                      </MenuItem>
                      <MenuItem
                        data-id="131834"
                        value="131834"
                        data-select2-id="397"
                      >
                        Elayirampannai
                      </MenuItem>
                      <MenuItem
                        data-id="131833"
                        value="131833"
                        data-select2-id="398"
                      >
                        Elumalai
                      </MenuItem>
                      <MenuItem
                        data-id="131837"
                        value="131837"
                        data-select2-id="399"
                      >
                        Eral
                      </MenuItem>
                      <MenuItem
                        data-id="131839"
                        value="131839"
                        data-select2-id="400"
                      >
                        Eraniel
                      </MenuItem>
                      <MenuItem
                        data-id="131841"
                        value="131841"
                        data-select2-id="401"
                      >
                        Erode
                      </MenuItem>
                      <MenuItem
                        data-id="131843"
                        value="131843"
                        data-select2-id="402"
                      >
                        Erumaippatti
                      </MenuItem>
                      <MenuItem
                        data-id="131847"
                        value="131847"
                        data-select2-id="403"
                      >
                        Ettaiyapuram
                      </MenuItem>
                      <MenuItem
                        data-id="132045"
                        value="132045"
                        data-select2-id="404"
                      >
                        Gandhi Nagar
                      </MenuItem>
                      <MenuItem
                        data-id="131901"
                        value="131901"
                        data-select2-id="405"
                      >
                        Gangaikondan
                      </MenuItem>
                      <MenuItem
                        data-id="131902"
                        value="131902"
                        data-select2-id="406"
                      >
                        Gangavalli
                      </MenuItem>
                      <MenuItem
                        data-id="131957"
                        value="131957"
                        data-select2-id="407"
                      >
                        Gingee
                      </MenuItem>
                      <MenuItem
                        data-id="131961"
                        value="131961"
                        data-select2-id="408"
                      >
                        Gobichettipalayam
                      </MenuItem>
                      <MenuItem
                        data-id="132008"
                        value="132008"
                        data-select2-id="409"
                      >
                        Gudalur
                      </MenuItem>
                      <MenuItem
                        data-id="132011"
                        value="132011"
                        data-select2-id="410"
                      >
                        Gudiyatham
                      </MenuItem>
                      <MenuItem
                        data-id="132050"
                        value="132050"
                        data-select2-id="411"
                      >
                        Guduvancheri
                      </MenuItem>
                      <MenuItem
                        data-id="132023"
                        value="132023"
                        data-select2-id="412"
                      >
                        Gummidipundi
                      </MenuItem>
                      <MenuItem
                        data-id="132083"
                        value="132083"
                        data-select2-id="413"
                      >
                        Harur
                      </MenuItem>
                      <MenuItem
                        data-id="132125"
                        value="132125"
                        data-select2-id="414"
                      >
                        Hosur
                      </MenuItem>
                      <MenuItem
                        data-id="132153"
                        value="132153"
                        data-select2-id="415"
                      >
                        Idappadi
                      </MenuItem>
                      <MenuItem
                        data-id="132159"
                        value="132159"
                        data-select2-id="416"
                      >
                        Ilampillai
                      </MenuItem>
                      <MenuItem
                        data-id="132161"
                        value="132161"
                        data-select2-id="417"
                      >
                        Iluppur
                      </MenuItem>
                      <MenuItem
                        data-id="132169"
                        value="132169"
                        data-select2-id="418"
                      >
                        Injambakkam
                      </MenuItem>
                      <MenuItem
                        data-id="132172"
                        value="132172"
                        data-select2-id="419"
                      >
                        Irugur
                      </MenuItem>
                      <MenuItem
                        data-id="132210"
                        value="132210"
                        data-select2-id="420"
                      >
                        Jalakandapuram
                      </MenuItem>
                      <MenuItem
                        data-id="132225"
                        value="132225"
                        data-select2-id="421"
                      >
                        Jalarpet
                      </MenuItem>
                      <MenuItem
                        data-id="132256"
                        value="132256"
                        data-select2-id="422"
                      >
                        Jayamkondacholapuram
                      </MenuItem>
                      <MenuItem
                        data-id="132324"
                        value="132324"
                        data-select2-id="423"
                      >
                        Kadambur
                      </MenuItem>
                      <MenuItem
                        data-id="132326"
                        value="132326"
                        data-select2-id="424"
                      >
                        Kadayanallur
                      </MenuItem>
                      <MenuItem
                        data-id="132343"
                        value="132343"
                        data-select2-id="425"
                      >
                        Kalakkadu
                      </MenuItem>
                      <MenuItem
                        data-id="132349"
                        value="132349"
                        data-select2-id="426"
                      >
                        Kalavai
                      </MenuItem>
                      <MenuItem
                        data-id="132352"
                        value="132352"
                        data-select2-id="427"
                      >
                        Kallakkurichchi
                      </MenuItem>
                      <MenuItem
                        data-id="132353"
                        value="132353"
                        data-select2-id="428"
                      >
                        Kallidaikurichi
                      </MenuItem>
                      <MenuItem
                        data-id="132354"
                        value="132354"
                        data-select2-id="429"
                      >
                        Kallupatti
                      </MenuItem>
                      <MenuItem
                        data-id="132357"
                        value="132357"
                        data-select2-id="430"
                      >
                        Kalugumalai
                      </MenuItem>
                      <MenuItem
                        data-id="132367"
                        value="132367"
                        data-select2-id="431"
                      >
                        Kamuthi
                      </MenuItem>
                      <MenuItem
                        data-id="132368"
                        value="132368"
                        data-select2-id="432"
                      >
                        Kanadukattan
                      </MenuItem>
                      <MenuItem
                        data-id="132369"
                        value="132369"
                        data-select2-id="433"
                      >
                        Kancheepuram
                      </MenuItem>
                      <MenuItem
                        data-id="132370"
                        value="132370"
                        data-select2-id="434"
                      >
                        Kanchipuram
                      </MenuItem>
                      <MenuItem
                        data-id="132373"
                        value="132373"
                        data-select2-id="435"
                      >
                        Kangayam
                      </MenuItem>
                      <MenuItem
                        data-id="132380"
                        value="132380"
                        data-select2-id="436"
                      >
                        Kanniyakumari
                      </MenuItem>
                      <MenuItem
                        data-id="132714"
                        value="132714"
                        data-select2-id="437"
                      >
                        Karaikkudi
                      </MenuItem>
                      <MenuItem
                        data-id="132716"
                        value="132716"
                        data-select2-id="438"
                      >
                        Karamadai
                      </MenuItem>
                      <MenuItem
                        data-id="132393"
                        value="132393"
                        data-select2-id="439"
                      >
                        Karambakkudi
                      </MenuItem>
                      <MenuItem
                        data-id="132401"
                        value="132401"
                        data-select2-id="440"
                      >
                        Kariapatti
                      </MenuItem>
                      <MenuItem
                        data-id="132409"
                        value="132409"
                        data-select2-id="441"
                      >
                        Karumbakkam
                      </MenuItem>
                      <MenuItem
                        data-id="132410"
                        value="132410"
                        data-select2-id="442"
                      >
                        Karur
                      </MenuItem>
                      <MenuItem
                        data-id="132726"
                        value="132726"
                        data-select2-id="443"
                      >
                        Katpadi
                      </MenuItem>
                      <MenuItem
                        data-id="132429"
                        value="132429"
                        data-select2-id="444"
                      >
                        Kattivakkam
                      </MenuItem>
                      <MenuItem
                        data-id="132728"
                        value="132728"
                        data-select2-id="445"
                      >
                        Kattupputtur
                      </MenuItem>
                      <MenuItem
                        data-id="132730"
                        value="132730"
                        data-select2-id="446"
                      >
                        Kaveripatnam
                      </MenuItem>
                      <MenuItem
                        data-id="132435"
                        value="132435"
                        data-select2-id="447"
                      >
                        Kayalpattinam
                      </MenuItem>
                      <MenuItem
                        data-id="132436"
                        value="132436"
                        data-select2-id="448"
                      >
                        Kayattar
                      </MenuItem>
                      <MenuItem
                        data-id="132437"
                        value="132437"
                        data-select2-id="449"
                      >
                        Keelakarai
                      </MenuItem>
                      <MenuItem
                        data-id="132439"
                        value="132439"
                        data-select2-id="450"
                      >
                        Kelamangalam
                      </MenuItem>
                      <MenuItem
                        data-id="132732"
                        value="132732"
                        data-select2-id="451"
                      >
                        Kil Bhuvanagiri
                      </MenuItem>
                      <MenuItem
                        data-id="132522"
                        value="132522"
                        data-select2-id="452"
                      >
                        Kilvelur
                      </MenuItem>
                      <MenuItem
                        data-id="132733"
                        value="132733"
                        data-select2-id="453"
                      >
                        Kiranur
                      </MenuItem>
                      <MenuItem
                        data-id="132538"
                        value="132538"
                        data-select2-id="454"
                      >
                        Kodaikanal
                      </MenuItem>
                      <MenuItem
                        data-id="132544"
                        value="132544"
                        data-select2-id="455"
                      >
                        Kodumudi
                      </MenuItem>
                      <MenuItem
                        data-id="132562"
                        value="132562"
                        data-select2-id="456"
                      >
                        Kombai
                      </MenuItem>
                      <MenuItem
                        data-id="132568"
                        value="132568"
                        data-select2-id="457"
                      >
                        Konganapuram
                      </MenuItem>
                      <MenuItem
                        data-id="132571"
                        value="132571"
                        data-select2-id="458"
                      >
                        Koothanallur
                      </MenuItem>
                      <MenuItem
                        data-id="132576"
                        value="132576"
                        data-select2-id="459"
                      >
                        Koradachcheri
                      </MenuItem>
                      <MenuItem
                        data-id="132577"
                        value="132577"
                        data-select2-id="460"
                      >
                        Korampallam
                      </MenuItem>
                      <MenuItem
                        data-id="132594"
                        value="132594"
                        data-select2-id="461"
                      >
                        Kotagiri
                      </MenuItem>
                      <MenuItem
                        data-id="132607"
                        value="132607"
                        data-select2-id="462"
                      >
                        Kottaiyur
                      </MenuItem>
                      <MenuItem
                        data-id="132615"
                        value="132615"
                        data-select2-id="463"
                      >
                        Kovilpatti
                      </MenuItem>
                      <MenuItem
                        data-id="132622"
                        value="132622"
                        data-select2-id="464"
                      >
                        Krishnagiri
                      </MenuItem>
                      <MenuItem
                        data-id="132632"
                        value="132632"
                        data-select2-id="465"
                      >
                        Kulattur
                      </MenuItem>
                      <MenuItem
                        data-id="132634"
                        value="132634"
                        data-select2-id="466"
                      >
                        Kulittalai
                      </MenuItem>
                      <MenuItem
                        data-id="132637"
                        value="132637"
                        data-select2-id="467"
                      >
                        Kumaralingam
                      </MenuItem>
                      <MenuItem
                        data-id="132638"
                        value="132638"
                        data-select2-id="468"
                      >
                        Kumbakonam
                      </MenuItem>
                      <MenuItem
                        data-id="132651"
                        value="132651"
                        data-select2-id="469"
                      >
                        Kunnattur
                      </MenuItem>
                      <MenuItem
                        data-id="132659"
                        value="132659"
                        data-select2-id="470"
                      >
                        Kurinjippadi
                      </MenuItem>
                      <MenuItem
                        data-id="132672"
                        value="132672"
                        data-select2-id="471"
                      >
                        Kuttalam
                      </MenuItem>
                      <MenuItem
                        data-id="132673"
                        value="132673"
                        data-select2-id="472"
                      >
                        Kuzhithurai
                      </MenuItem>
                      <MenuItem
                        data-id="132754"
                        value="132754"
                        data-select2-id="473"
                      >
                        Lalgudi
                      </MenuItem>
                      <MenuItem
                        data-id="132807"
                        value="132807"
                        data-select2-id="474"
                      >
                        Madambakkam
                      </MenuItem>
                      <MenuItem
                        data-id="132818"
                        value="132818"
                        data-select2-id="475"
                      >
                        Madipakkam
                      </MenuItem>
                      <MenuItem
                        data-id="132819"
                        value="132819"
                        data-select2-id="476"
                      >
                        Madukkarai
                      </MenuItem>
                      <MenuItem
                        data-id="132820"
                        value="132820"
                        data-select2-id="477"
                      >
                        Madukkur
                      </MenuItem>
                      <MenuItem
                        data-id="132821"
                        value="132821"
                        data-select2-id="478"
                      >
                        Madurai
                      </MenuItem>
                      <MenuItem
                        data-id="132822"
                        value="132822"
                        data-select2-id="479"
                      >
                        Madurantakam
                      </MenuItem>
                      <MenuItem
                        data-id="132876"
                        value="132876"
                        data-select2-id="480"
                      >
                        Mallapuram
                      </MenuItem>
                      <MenuItem
                        data-id="132875"
                        value="132875"
                        data-select2-id="481"
                      >
                        Mallasamudram
                      </MenuItem>
                      <MenuItem
                        data-id="133067"
                        value="133067"
                        data-select2-id="482"
                      >
                        Mallur
                      </MenuItem>
                      <MenuItem
                        data-id="132880"
                        value="132880"
                        data-select2-id="483"
                      >
                        Manali
                      </MenuItem>
                      <MenuItem
                        data-id="132881"
                        value="132881"
                        data-select2-id="484"
                      >
                        Manalurpettai
                      </MenuItem>
                      <MenuItem
                        data-id="132882"
                        value="132882"
                        data-select2-id="485"
                      >
                        Manamadurai
                      </MenuItem>
                      <MenuItem
                        data-id="132883"
                        value="132883"
                        data-select2-id="486"
                      >
                        Manappakkam
                      </MenuItem>
                      <MenuItem
                        data-id="132884"
                        value="132884"
                        data-select2-id="487"
                      >
                        Manapparai
                      </MenuItem>
                      <MenuItem
                        data-id="132885"
                        value="132885"
                        data-select2-id="488"
                      >
                        Manavalakurichi
                      </MenuItem>
                      <MenuItem
                        data-id="132889"
                        value="132889"
                        data-select2-id="489"
                      >
                        Mandapam
                      </MenuItem>
                      <MenuItem
                        data-id="132903"
                        value="132903"
                        data-select2-id="490"
                      >
                        Mangalam
                      </MenuItem>
                      <MenuItem
                        data-id="132919"
                        value="132919"
                        data-select2-id="491"
                      >
                        Mannargudi
                      </MenuItem>
                      <MenuItem
                        data-id="132932"
                        value="132932"
                        data-select2-id="492"
                      >
                        Marakkanam
                      </MenuItem>
                      <MenuItem
                        data-id="133089"
                        value="133089"
                        data-select2-id="493"
                      >
                        Marandahalli
                      </MenuItem>
                      <MenuItem
                        data-id="132939"
                        value="132939"
                        data-select2-id="494"
                      >
                        Masinigudi
                      </MenuItem>
                      <MenuItem
                        data-id="133091"
                        value="133091"
                        data-select2-id="495"
                      >
                        Mattur
                      </MenuItem>
                      <MenuItem
                        data-id="132952"
                        value="132952"
                        data-select2-id="496"
                      >
                        Mayiladuthurai
                      </MenuItem>
                      <MenuItem
                        data-id="132965"
                        value="132965"
                        data-select2-id="497"
                      >
                        Melur
                      </MenuItem>
                      <MenuItem
                        data-id="132969"
                        value="132969"
                        data-select2-id="498"
                      >
                        Mettuppalaiyam
                      </MenuItem>
                      <MenuItem
                        data-id="132970"
                        value="132970"
                        data-select2-id="499"
                      >
                        Mettur
                      </MenuItem>
                      <MenuItem
                        data-id="133094"
                        value="133094"
                        data-select2-id="500"
                      >
                        Minjur
                      </MenuItem>
                      <MenuItem
                        data-id="132982"
                        value="132982"
                        data-select2-id="501"
                      >
                        Mohanur
                      </MenuItem>
                      <MenuItem
                        data-id="133013"
                        value="133013"
                        data-select2-id="502"
                      >
                        Mudukulattur
                      </MenuItem>
                      <MenuItem
                        data-id="133100"
                        value="133100"
                        data-select2-id="503"
                      >
                        Mulanur
                      </MenuItem>
                      <MenuItem
                        data-id="133045"
                        value="133045"
                        data-select2-id="504"
                      >
                        Musiri
                      </MenuItem>
                      <MenuItem
                        data-id="133049"
                        value="133049"
                        data-select2-id="505"
                      >
                        Muttupet
                      </MenuItem>
                      <MenuItem
                        data-id="133108"
                        value="133108"
                        data-select2-id="506"
                      >
                        Naduvattam
                      </MenuItem>
                      <MenuItem
                        data-id="133111"
                        value="133111"
                        data-select2-id="507"
                      >
                        Nagapattinam
                      </MenuItem>
                      <MenuItem
                        data-id="133257"
                        value="133257"
                        data-select2-id="508"
                      >
                        Nagercoil
                      </MenuItem>
                      <MenuItem
                        data-id="133264"
                        value="133264"
                        data-select2-id="509"
                      >
                        Namagiripettai
                      </MenuItem>
                      <MenuItem
                        data-id="133134"
                        value="133134"
                        data-select2-id="510"
                      >
                        Namakkal
                      </MenuItem>
                      <MenuItem
                        data-id="133135"
                        value="133135"
                        data-select2-id="511"
                      >
                        Nambiyur
                      </MenuItem>
                      <MenuItem
                        data-id="133136"
                        value="133136"
                        data-select2-id="512"
                      >
                        Nambutalai
                      </MenuItem>
                      <MenuItem
                        data-id="133140"
                        value="133140"
                        data-select2-id="513"
                      >
                        Nandambakkam
                      </MenuItem>
                      <MenuItem
                        data-id="133148"
                        value="133148"
                        data-select2-id="514"
                      >
                        Nangavalli
                      </MenuItem>
                      <MenuItem
                        data-id="133149"
                        value="133149"
                        data-select2-id="515"
                      >
                        Nangilickondan
                      </MenuItem>
                      <MenuItem
                        data-id="133150"
                        value="133150"
                        data-select2-id="516"
                      >
                        Nanguneri
                      </MenuItem>
                      <MenuItem
                        data-id="133152"
                        value="133152"
                        data-select2-id="517"
                      >
                        Nannilam
                      </MenuItem>
                      <MenuItem
                        data-id="133271"
                        value="133271"
                        data-select2-id="518"
                      >
                        Naravarikuppam
                      </MenuItem>
                      <MenuItem
                        data-id="133181"
                        value="133181"
                        data-select2-id="519"
                      >
                        Nattam
                      </MenuItem>
                      <MenuItem
                        data-id="133281"
                        value="133281"
                        data-select2-id="520"
                      >
                        Nattarasankottai
                      </MenuItem>
                      <MenuItem
                        data-id="133199"
                        value="133199"
                        data-select2-id="521"
                      >
                        Needamangalam
                      </MenuItem>
                      <MenuItem
                        data-id="133200"
                        value="133200"
                        data-select2-id="522"
                      >
                        Neelankarai
                      </MenuItem>
                      <MenuItem
                        data-id="133203"
                        value="133203"
                        data-select2-id="523"
                      >
                        Negapatam
                      </MenuItem>
                      <MenuItem
                        data-id="133205"
                        value="133205"
                        data-select2-id="524"
                      >
                        Nellikkuppam
                      </MenuItem>
                      <MenuItem
                        data-id="133216"
                        value="133216"
                        data-select2-id="525"
                      >
                        Nilakottai
                      </MenuItem>
                      <MenuItem
                        data-id="133218"
                        value="133218"
                        data-select2-id="526"
                      >
                        Nilgiris
                      </MenuItem>
                      <MenuItem
                        data-id="133296"
                        value="133296"
                        data-select2-id="527"
                      >
                        Odugattur
                      </MenuItem>
                      <MenuItem
                        data-id="133299"
                        value="133299"
                        data-select2-id="528"
                      >
                        Omalur
                      </MenuItem>
                      <MenuItem
                        data-id="133301"
                        value="133301"
                        data-select2-id="529"
                      >
                        Ooty
                      </MenuItem>
                      <MenuItem
                        data-id="133314"
                        value="133314"
                        data-select2-id="530"
                      >
                        Padmanabhapuram
                      </MenuItem>
                      <MenuItem
                        data-id="133522"
                        value="133522"
                        data-select2-id="531"
                      >
                        Palakkodu
                      </MenuItem>
                      <MenuItem
                        data-id="133524"
                        value="133524"
                        data-select2-id="532"
                      >
                        Palamedu
                      </MenuItem>
                      <MenuItem
                        data-id="133323"
                        value="133323"
                        data-select2-id="533"
                      >
                        Palani
                      </MenuItem>
                      <MenuItem
                        data-id="133324"
                        value="133324"
                        data-select2-id="534"
                      >
                        Palavakkam
                      </MenuItem>
                      <MenuItem
                        data-id="133327"
                        value="133327"
                        data-select2-id="535"
                      >
                        Palladam
                      </MenuItem>
                      <MenuItem
                        data-id="133328"
                        value="133328"
                        data-select2-id="536"
                      >
                        Pallappatti
                      </MenuItem>
                      <MenuItem
                        data-id="133329"
                        value="133329"
                        data-select2-id="537"
                      >
                        Pallattur
                      </MenuItem>
                      <MenuItem
                        data-id="133335"
                        value="133335"
                        data-select2-id="538"
                      >
                        Pallavaram
                      </MenuItem>
                      <MenuItem
                        data-id="133332"
                        value="133332"
                        data-select2-id="539"
                      >
                        Pallikondai
                      </MenuItem>
                      <MenuItem
                        data-id="133333"
                        value="133333"
                        data-select2-id="540"
                      >
                        Pallipattu
                      </MenuItem>
                      <MenuItem
                        data-id="133334"
                        value="133334"
                        data-select2-id="541"
                      >
                        Pallippatti
                      </MenuItem>
                      <MenuItem
                        data-id="133352"
                        value="133352"
                        data-select2-id="542"
                      >
                        Panruti
                      </MenuItem>
                      <MenuItem
                        data-id="133355"
                        value="133355"
                        data-select2-id="543"
                      >
                        Papanasam
                      </MenuItem>
                      <MenuItem
                        data-id="133545"
                        value="133545"
                        data-select2-id="544"
                      >
                        Papireddippatti
                      </MenuItem>
                      <MenuItem
                        data-id="133547"
                        value="133547"
                        data-select2-id="545"
                      >
                        Papparappatti
                      </MenuItem>
                      <MenuItem
                        data-id="133356"
                        value="133356"
                        data-select2-id="546"
                      >
                        Paramagudi
                      </MenuItem>
                      <MenuItem
                        data-id="133392"
                        value="133392"
                        data-select2-id="547"
                      >
                        Pattukkottai
                      </MenuItem>
                      <MenuItem
                        data-id="133406"
                        value="133406"
                        data-select2-id="548"
                      >
                        Pennadam
                      </MenuItem>
                      <MenuItem
                        data-id="133407"
                        value="133407"
                        data-select2-id="549"
                      >
                        Pennagaram
                      </MenuItem>
                      <MenuItem
                        data-id="133408"
                        value="133408"
                        data-select2-id="550"
                      >
                        Pennathur
                      </MenuItem>
                      <MenuItem
                        data-id="133411"
                        value="133411"
                        data-select2-id="551"
                      >
                        Peraiyur
                      </MenuItem>
                      <MenuItem
                        data-id="133412"
                        value="133412"
                        data-select2-id="552"
                      >
                        Perambalur
                      </MenuItem>
                      <MenuItem
                        data-id="133413"
                        value="133413"
                        data-select2-id="553"
                      >
                        Peranamallur
                      </MenuItem>
                      <MenuItem
                        data-id="133414"
                        value="133414"
                        data-select2-id="554"
                      >
                        Peranampattu
                      </MenuItem>
                      <MenuItem
                        data-id="133415"
                        value="133415"
                        data-select2-id="555"
                      >
                        Peravurani
                      </MenuItem>
                      <MenuItem
                        data-id="133417"
                        value="133417"
                        data-select2-id="556"
                      >
                        Periyakulam
                      </MenuItem>
                      <MenuItem
                        data-id="133418"
                        value="133418"
                        data-select2-id="557"
                      >
                        Periyanayakkanpalaiyam
                      </MenuItem>
                      <MenuItem
                        data-id="133419"
                        value="133419"
                        data-select2-id="558"
                      >
                        Periyanegamam
                      </MenuItem>
                      <MenuItem
                        data-id="133420"
                        value="133420"
                        data-select2-id="559"
                      >
                        Periyapatti
                      </MenuItem>
                      <MenuItem
                        data-id="133421"
                        value="133421"
                        data-select2-id="560"
                      >
                        Periyapattinam
                      </MenuItem>
                      <MenuItem
                        data-id="133425"
                        value="133425"
                        data-select2-id="561"
                      >
                        Perundurai
                      </MenuItem>
                      <MenuItem
                        data-id="133426"
                        value="133426"
                        data-select2-id="562"
                      >
                        Perungudi
                      </MenuItem>
                      <MenuItem
                        data-id="133428"
                        value="133428"
                        data-select2-id="563"
                      >
                        Perur
                      </MenuItem>
                      <MenuItem
                        data-id="133469"
                        value="133469"
                        data-select2-id="564"
                      >
                        Pollachi
                      </MenuItem>
                      <MenuItem
                        data-id="133470"
                        value="133470"
                        data-select2-id="565"
                      >
                        Polur
                      </MenuItem>
                      <MenuItem
                        data-id="133473"
                        value="133473"
                        data-select2-id="566"
                      >
                        Ponnamaravati
                      </MenuItem>
                      <MenuItem
                        data-id="133475"
                        value="133475"
                        data-select2-id="567"
                      >
                        Ponneri
                      </MenuItem>
                      <MenuItem
                        data-id="133479"
                        value="133479"
                        data-select2-id="568"
                      >
                        Poonamalle
                      </MenuItem>
                      <MenuItem
                        data-id="133483"
                        value="133483"
                        data-select2-id="569"
                      >
                        Porur
                      </MenuItem>
                      <MenuItem
                        data-id="133491"
                        value="133491"
                        data-select2-id="570"
                      >
                        Pudukkottai
                      </MenuItem>
                      <MenuItem
                        data-id="133492"
                        value="133492"
                        data-select2-id="571"
                      >
                        Puduppatti
                      </MenuItem>
                      <MenuItem
                        data-id="133494"
                        value="133494"
                        data-select2-id="572"
                      >
                        Pudur
                      </MenuItem>
                      <MenuItem
                        data-id="133493"
                        value="133493"
                        data-select2-id="573"
                      >
                        Puduvayal
                      </MenuItem>
                      <MenuItem
                        data-id="133498"
                        value="133498"
                        data-select2-id="574"
                      >
                        Puliyangudi
                      </MenuItem>
                      <MenuItem
                        data-id="133499"
                        value="133499"
                        data-select2-id="575"
                      >
                        Puliyur
                      </MenuItem>
                      <MenuItem
                        data-id="133500"
                        value="133500"
                        data-select2-id="576"
                      >
                        Pullambadi
                      </MenuItem>
                      <MenuItem
                        data-id="133507"
                        value="133507"
                        data-select2-id="577"
                      >
                        Punjai Puliyampatti
                      </MenuItem>
                      <MenuItem
                        data-id="133594"
                        value="133594"
                        data-select2-id="578"
                      >
                        Rajapalaiyam
                      </MenuItem>
                      <MenuItem
                        data-id="133599"
                        value="133599"
                        data-select2-id="579"
                      >
                        Ramanathapuram
                      </MenuItem>
                      <MenuItem
                        data-id="133603"
                        value="133603"
                        data-select2-id="580"
                      >
                        Rameswaram
                      </MenuItem>
                      <MenuItem
                        data-id="149548"
                        value="149548"
                        data-select2-id="581"
                      >
                        Ranipet
                      </MenuItem>
                      <MenuItem
                        data-id="133611"
                        value="133611"
                        data-select2-id="582"
                      >
                        Rasipuram
                      </MenuItem>
                      <MenuItem
                        data-id="133758"
                        value="133758"
                        data-select2-id="583"
                      >
                        Saint Thomas Mount
                      </MenuItem>
                      <MenuItem
                        data-id="133763"
                        value="133763"
                        data-select2-id="584"
                      >
                        Salem
                      </MenuItem>
                      <MenuItem
                        data-id="133817"
                        value="133817"
                        data-select2-id="585"
                      >
                        Sathankulam
                      </MenuItem>
                      <MenuItem
                        data-id="133819"
                        value="133819"
                        data-select2-id="586"
                      >
                        Sathyamangalam
                      </MenuItem>
                      <MenuItem
                        data-id="133823"
                        value="133823"
                        data-select2-id="587"
                      >
                        Sattur
                      </MenuItem>
                      <MenuItem
                        data-id="134084"
                        value="134084"
                        data-select2-id="588"
                      >
                        Sayalkudi
                      </MenuItem>
                      <MenuItem
                        data-id="133851"
                        value="133851"
                        data-select2-id="589"
                      >
                        Seven Pagodas
                      </MenuItem>
                      <MenuItem
                        data-id="133883"
                        value="133883"
                        data-select2-id="590"
                      >
                        Sholinghur
                      </MenuItem>
                      <MenuItem
                        data-id="133950"
                        value="133950"
                        data-select2-id="591"
                      >
                        Singanallur
                      </MenuItem>
                      <MenuItem
                        data-id="133945"
                        value="133945"
                        data-select2-id="592"
                      >
                        Singapperumalkovil
                      </MenuItem>
                      <MenuItem
                        data-id="134088"
                        value="134088"
                        data-select2-id="593"
                      >
                        Sirkazhi
                      </MenuItem>
                      <MenuItem
                        data-id="133968"
                        value="133968"
                        data-select2-id="594"
                      >
                        Sirumugai
                      </MenuItem>
                      <MenuItem
                        data-id="133974"
                        value="133974"
                        data-select2-id="595"
                      >
                        Sivaganga
                      </MenuItem>
                      <MenuItem
                        data-id="133975"
                        value="133975"
                        data-select2-id="596"
                      >
                        Sivagiri
                      </MenuItem>
                      <MenuItem
                        data-id="133976"
                        value="133976"
                        data-select2-id="597"
                      >
                        Sivakasi
                      </MenuItem>
                      <MenuItem
                        data-id="134026"
                        value="134026"
                        data-select2-id="598"
                      >
                        Srimushnam
                      </MenuItem>
                      <MenuItem
                        data-id="134030"
                        value="134030"
                        data-select2-id="599"
                      >
                        Sriperumbudur
                      </MenuItem>
                      <MenuItem
                        data-id="134022"
                        value="134022"
                        data-select2-id="600"
                      >
                        Srivaikuntam
                      </MenuItem>
                      <MenuItem
                        data-id="134023"
                        value="134023"
                        data-select2-id="601"
                      >
                        Srivilliputhur
                      </MenuItem>
                      <MenuItem
                        data-id="134035"
                        value="134035"
                        data-select2-id="602"
                      >
                        Suchindram
                      </MenuItem>
                      <MenuItem
                        data-id="134041"
                        value="134041"
                        data-select2-id="603"
                      >
                        Sulur
                      </MenuItem>
                      <MenuItem
                        data-id="134095"
                        value="134095"
                        data-select2-id="604"
                      >
                        Surandai
                      </MenuItem>
                      <MenuItem
                        data-id="134057"
                        value="134057"
                        data-select2-id="605"
                      >
                        Swamimalai
                      </MenuItem>
                      <MenuItem
                        data-id="134108"
                        value="134108"
                        data-select2-id="606"
                      >
                        Tambaram
                      </MenuItem>
                      <MenuItem
                        data-id="134111"
                        value="134111"
                        data-select2-id="607"
                      >
                        Tanjore
                      </MenuItem>
                      <MenuItem
                        data-id="134239"
                        value="134239"
                        data-select2-id="608"
                      >
                        Taramangalam
                      </MenuItem>
                      <MenuItem
                        data-id="134243"
                        value="134243"
                        data-select2-id="609"
                      >
                        Tattayyangarpettai
                      </MenuItem>
                      <MenuItem
                        data-id="134140"
                        value="134140"
                        data-select2-id="610"
                      >
                        Thanjavur
                      </MenuItem>
                      <MenuItem
                        data-id="134143"
                        value="134143"
                        data-select2-id="611"
                      >
                        Tharangambadi
                      </MenuItem>
                      <MenuItem
                        data-id="134146"
                        value="134146"
                        data-select2-id="612"
                      >
                        Theni
                      </MenuItem>
                      <MenuItem
                        data-id="134147"
                        value="134147"
                        data-select2-id="613"
                      >
                        Thenkasi
                      </MenuItem>
                      <MenuItem
                        data-id="134150"
                        value="134150"
                        data-select2-id="614"
                      >
                        Thirukattupalli
                      </MenuItem>
                      <MenuItem
                        data-id="134151"
                        value="134151"
                        data-select2-id="615"
                      >
                        Thiruthani
                      </MenuItem>
                      <MenuItem
                        data-id="134152"
                        value="134152"
                        data-select2-id="616"
                      >
                        Thiruvaiyaru
                      </MenuItem>
                      <MenuItem
                        data-id="134153"
                        value="134153"
                        data-select2-id="617"
                      >
                        Thiruvallur
                      </MenuItem>
                      <MenuItem
                        data-id="134155"
                        value="134155"
                        data-select2-id="618"
                      >
                        Thiruvarur
                      </MenuItem>
                      <MenuItem
                        data-id="134156"
                        value="134156"
                        data-select2-id="619"
                      >
                        Thiruvidaimaruthur
                      </MenuItem>
                      <MenuItem
                        data-id="134158"
                        value="134158"
                        data-select2-id="620"
                      >
                        Thoothukudi
                      </MenuItem>
                      <MenuItem
                        data-id="134172"
                        value="134172"
                        data-select2-id="621"
                      >
                        Tindivanam
                      </MenuItem>
                      <MenuItem
                        data-id="134174"
                        value="134174"
                        data-select2-id="622"
                      >
                        Tinnanur
                      </MenuItem>
                      <MenuItem
                        data-id="134178"
                        value="134178"
                        data-select2-id="623"
                      >
                        Tiruchchendur
                      </MenuItem>
                      <MenuItem
                        data-id="134179"
                        value="134179"
                        data-select2-id="624"
                      >
                        Tiruchengode
                      </MenuItem>
                      <MenuItem
                        data-id="134180"
                        value="134180"
                        data-select2-id="625"
                      >
                        Tiruchirappalli
                      </MenuItem>
                      <MenuItem
                        data-id="134181"
                        value="134181"
                        data-select2-id="626"
                      >
                        Tirukkoyilur
                      </MenuItem>
                      <MenuItem
                        data-id="134184"
                        value="134184"
                        data-select2-id="627"
                      >
                        Tirumullaivasal
                      </MenuItem>
                      <MenuItem
                        data-id="134185"
                        value="134185"
                        data-select2-id="628"
                      >
                        Tirunelveli
                      </MenuItem>
                      <MenuItem
                        data-id="134186"
                        value="134186"
                        data-select2-id="629"
                      >
                        Tirunelveli Kattabo
                      </MenuItem>
                      <MenuItem
                        data-id="134191"
                        value="134191"
                        data-select2-id="630"
                      >
                        Tiruppalaikudi
                      </MenuItem>
                      <MenuItem
                        data-id="134188"
                        value="134188"
                        data-select2-id="631"
                      >
                        Tirupparangunram
                      </MenuItem>
                      <MenuItem
                        data-id="134189"
                        value="134189"
                        data-select2-id="632"
                      >
                        Tiruppur
                      </MenuItem>
                      <MenuItem
                        data-id="134190"
                        value="134190"
                        data-select2-id="633"
                      >
                        Tiruppuvanam
                      </MenuItem>
                      <MenuItem
                        data-id="134193"
                        value="134193"
                        data-select2-id="634"
                      >
                        Tiruttangal
                      </MenuItem>
                      <MenuItem
                        data-id="134196"
                        value="134196"
                        data-select2-id="635"
                      >
                        Tiruvannamalai
                      </MenuItem>
                      <MenuItem
                        data-id="134198"
                        value="134198"
                        data-select2-id="636"
                      >
                        Tiruvottiyur
                      </MenuItem>
                      <MenuItem
                        data-id="134200"
                        value="134200"
                        data-select2-id="637"
                      >
                        Tisaiyanvilai
                      </MenuItem>
                      <MenuItem
                        data-id="134207"
                        value="134207"
                        data-select2-id="638"
                      >
                        Tondi
                      </MenuItem>
                      <MenuItem
                        data-id="134224"
                        value="134224"
                        data-select2-id="639"
                      >
                        Turaiyur
                      </MenuItem>
                      <MenuItem
                        data-id="134253"
                        value="134253"
                        data-select2-id="640"
                      >
                        Udangudi
                      </MenuItem>
                      <MenuItem
                        data-id="134259"
                        value="134259"
                        data-select2-id="641"
                      >
                        Udumalaippettai
                      </MenuItem>
                      <MenuItem
                        data-id="134290"
                        value="134290"
                        data-select2-id="642"
                      >
                        Uppiliyapuram
                      </MenuItem>
                      <MenuItem
                        data-id="134295"
                        value="134295"
                        data-select2-id="643"
                      >
                        Usilampatti
                      </MenuItem>
                      <MenuItem
                        data-id="134298"
                        value="134298"
                        data-select2-id="644"
                      >
                        Uttamapalaiyam
                      </MenuItem>
                      <MenuItem
                        data-id="134302"
                        value="134302"
                        data-select2-id="645"
                      >
                        Uttiramerur
                      </MenuItem>
                      <MenuItem
                        data-id="134472"
                        value="134472"
                        data-select2-id="646"
                      >
                        Uttukkuli
                      </MenuItem>
                      <MenuItem
                        data-id="134303"
                        value="134303"
                        data-select2-id="647"
                      >
                        V.S.K.Valasai (Dindigul-Dist.)
                      </MenuItem>
                      <MenuItem
                        data-id="134304"
                        value="134304"
                        data-select2-id="648"
                      >
                        Vadakku Valliyur
                      </MenuItem>
                      <MenuItem
                        data-id="134305"
                        value="134305"
                        data-select2-id="649"
                      >
                        Vadakku Viravanallur
                      </MenuItem>
                      <MenuItem
                        data-id="134306"
                        value="134306"
                        data-select2-id="650"
                      >
                        Vadamadurai
                      </MenuItem>
                      <MenuItem
                        data-id="134380"
                        value="134380"
                        data-select2-id="651"
                      >
                        Vadippatti
                      </MenuItem>
                      <MenuItem
                        data-id="134316"
                        value="134316"
                        data-select2-id="652"
                      >
                        Valangaiman
                      </MenuItem>
                      <MenuItem
                        data-id="134317"
                        value="134317"
                        data-select2-id="653"
                      >
                        Valavanur
                      </MenuItem>
                      <MenuItem
                        data-id="134319"
                        value="134319"
                        data-select2-id="654"
                      >
                        Vallam
                      </MenuItem>
                      <MenuItem
                        data-id="134320"
                        value="134320"
                        data-select2-id="655"
                      >
                        Valparai
                      </MenuItem>
                      <MenuItem
                        data-id="134323"
                        value="134323"
                        data-select2-id="656"
                      >
                        Vandalur
                      </MenuItem>
                      <MenuItem
                        data-id="134324"
                        value="134324"
                        data-select2-id="657"
                      >
                        Vandavasi
                      </MenuItem>
                      <MenuItem
                        data-id="134325"
                        value="134325"
                        data-select2-id="658"
                      >
                        Vaniyambadi
                      </MenuItem>
                      <MenuItem
                        data-id="134384"
                        value="134384"
                        data-select2-id="659"
                      >
                        Vasudevanallur
                      </MenuItem>
                      <MenuItem
                        data-id="134335"
                        value="134335"
                        data-select2-id="660"
                      >
                        Vattalkundu
                      </MenuItem>
                      <MenuItem
                        data-id="134337"
                        value="134337"
                        data-select2-id="661"
                      >
                        Vedaraniyam
                      </MenuItem>
                      <MenuItem
                        data-id="134338"
                        value="134338"
                        data-select2-id="662"
                      >
                        Vedasandur
                      </MenuItem>
                      <MenuItem
                        data-id="134340"
                        value="134340"
                        data-select2-id="663"
                      >
                        Velankanni
                      </MenuItem>
                      <MenuItem
                        data-id="134342"
                        value="134342"
                        data-select2-id="664"
                      >
                        Vellanur
                      </MenuItem>
                      <MenuItem
                        data-id="134341"
                        value="134341"
                        data-select2-id="665"
                      >
                        Vellore
                      </MenuItem>
                      <MenuItem
                        data-id="134343"
                        value="134343"
                        data-select2-id="666"
                      >
                        Velur
                      </MenuItem>
                      <MenuItem
                        data-id="134345"
                        value="134345"
                        data-select2-id="667"
                      >
                        Vengavasal
                      </MenuItem>
                      <MenuItem
                        data-id="134351"
                        value="134351"
                        data-select2-id="668"
                      >
                        Vettaikkaranpudur
                      </MenuItem>
                      <MenuItem
                        data-id="134352"
                        value="134352"
                        data-select2-id="669"
                      >
                        Vettavalam
                      </MenuItem>
                      <MenuItem
                        data-id="134355"
                        value="134355"
                        data-select2-id="670"
                      >
                        Vijayapuri
                      </MenuItem>
                      <MenuItem
                        data-id="134358"
                        value="134358"
                        data-select2-id="671"
                      >
                        Vikravandi
                      </MenuItem>
                      <MenuItem
                        data-id="134361"
                        value="134361"
                        data-select2-id="672"
                      >
                        Vilattikulam
                      </MenuItem>
                      <MenuItem
                        data-id="134362"
                        value="134362"
                        data-select2-id="673"
                      >
                        Villupuram
                      </MenuItem>
                      <MenuItem
                        data-id="134385"
                        value="134385"
                        data-select2-id="674"
                      >
                        Viraganur
                      </MenuItem>
                      <MenuItem
                        data-id="134366"
                        value="134366"
                        data-select2-id="675"
                      >
                        Virudhunagar
                      </MenuItem>
                      <MenuItem
                        data-id="134375"
                        value="134375"
                        data-select2-id="676"
                      >
                        Vriddhachalam
                      </MenuItem>
                      <MenuItem
                        data-id="134391"
                        value="134391"
                        data-select2-id="677"
                      >
                        Walajapet
                      </MenuItem>
                      <MenuItem
                        data-id="134392"
                        value="134392"
                        data-select2-id="678"
                      >
                        Wallajahbad
                      </MenuItem>
                      <MenuItem
                        data-id="134402"
                        value="134402"
                        data-select2-id="679"
                      >
                        Wellington
                      </MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Postal Code"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sx={{ width: "90% !important" }}
                  >
                    <DemoContainer
                      components={["DatePicker"]}
                      sx={{ width: "95% !important" }}
                    >
                      <DatePicker
                        label="Date of Joining"
                        sx={{ width: "100% !important" }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <LocalizationProvider
                    dateAdapter={AdapterDayjs}
                    sx={{ width: "90% !important" }}
                  >
                    <DemoContainer
                      components={["DatePicker"]}
                      sx={{ width: "95% !important" }}
                    >
                      <DatePicker
                        label="Offer Expires On"
                        sx={{ width: "100% !important" }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Salary (per annum)"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                      variant="filled"
                      sx={{ m: 1, width: "95% !important" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Designation
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={designationchange}
                        onChange={handledDesignationChange}
                      >
                        <MenuItem value={0}>IT</MenuItem>
                        <MenuItem value={1}>Non IT</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                      variant="filled"
                      sx={{ m: 1, width: "95% !important" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Employee Type
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={employeetypechange}
                        onChange={handledEmployeeTypeChange}
                      >
                        <MenuItem value={0}>Regular</MenuItem>
                        <MenuItem value={1}>Temporary</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                      variant="filled"
                      sx={{ m: 1, width: "95% !important" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                       Posting Location
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={locationchange}
                        onChange={handledLocationChange}
                      >
                        <MenuItem value={0}>Chennai</MenuItem>
                        <MenuItem value={1}>Bangalor</MenuItem>
                        <MenuItem value={2}>Mumbai</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <FormControl
                      variant="filled"
                      sx={{ m: 1, width: "95% !important" }}
                    >
                      <InputLabel id="demo-simple-select-filled-label">
                        Department
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-filled-label"
                        id="demo-simple-select-filled"
                        value={departmentchange}
                        onChange={handledDepartmentChange}
                      >
                        <MenuItem value={0}>IT</MenuItem>
                        <MenuItem value={1}>Software</MenuItem>
                      </Select>
                    </FormControl>
                </Grid>
                <Grid
                  md={6}
                  mb={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <TextField
                    required
                    id="filled-required"
                    label="Reporting To"
                    variant="filled"
                    sx={{ width: "95% !important" }}
                  />
                </Grid>
              </Grid>
              <Grid container md={12}>
                <Grid
                  rows
                  md={12}
                  mt={4}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    variant="contained"
                    sx={{ width: "60%" }}
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
