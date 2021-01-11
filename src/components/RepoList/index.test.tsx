import React from "react";
import { render, screen } from "@testing-library/react";

import RepoList from './index';

describe("RepoList Test", () => {
    beforeEach(() => {
        fetch.resetMocks()
    })  
    test("renders empty data", async () => {
        render(<RepoList />);
        fetch.mockResponseOnce(JSON.stringify([{}]))
        expect(await screen.findByText(/No Data/i));
        expect(fetch.mock.calls.length).toEqual(1)
    })
});