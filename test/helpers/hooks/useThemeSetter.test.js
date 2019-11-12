import useThemeSetter from "../../../src/helpers/hooks/useThemeSetter";
import {renderHook, act} from "@testing-library/react-hooks"
import { arrowFunctionExpression } from "@babel/types";

describe("useThemeSetter", () => {
	
	const documentBodyClasses = () => {
		const domTokenListValues = document.querySelector("body").classList.values();
		return [...domTokenListValues];
	};

	afterEach(()=>{
		window.localStorage.clear();
	});

	it("should display theme with initial value from local storage", () => {
		window.localStorage.setItem('theme','light');
		
		const { result } = renderHook(() => useThemeSetter('light', 'dark'));

		expect(result.current.theme).toBe('light');
		expect(window.localStorage.getItem('theme')).toBe('light');
		expect(documentBodyClasses())
			.toEqual(expect.arrayContaining(['light']));
		expect(documentBodyClasses())
			.not.toEqual(expect.arrayContaining(['dark']));
	});
	it("should display toggled theme with initial value from local storage", () => {
		window.localStorage.setItem('theme','light');
		
		const { result } = renderHook(() => useThemeSetter('light', 'dark'));

		act(()=>{
			result.current.toggleTheme();
		})

		expect(result.current.theme).toBe('dark');
		expect(window.localStorage.getItem('theme')).toBe('dark');
		expect(documentBodyClasses())
			.toEqual(expect.arrayContaining(['dark']));
		expect(documentBodyClasses())
			.not.toEqual(expect.arrayContaining(['light']));
			
	});
	it("should display theme with initial value from primary parameter", () => {
		expect(window.localStorage.getItem('theme')).toBeNull();
		const { result } = renderHook(() => useThemeSetter('light', 'dark'));

		expect(result.current.theme).toBe('light');
		expect(window.localStorage.getItem('theme')).toBe('light');
		expect(documentBodyClasses())
			.toEqual(expect.arrayContaining(['light']));
		expect(documentBodyClasses())
			.not.toEqual(expect.arrayContaining(['dark']));
	});
	it("should display toggled theme with initial value from primary parameter", () => {
		expect(window.localStorage.getItem('theme')).toBeNull();
		const { result } = renderHook(() => useThemeSetter('light', 'dark'));

		act(()=> {
			result.current.toggleTheme();
		})

		expect(result.current.theme).toBe('dark');
		expect(window.localStorage.getItem('theme')).toBe('dark');
		expect(documentBodyClasses())
			.toEqual(expect.arrayContaining(['dark']));
		expect(documentBodyClasses())
			.not.toEqual(expect.arrayContaining(['light']));
	});
});

//BDD
//given, when, then